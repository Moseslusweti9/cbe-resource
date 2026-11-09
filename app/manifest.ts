-- CBE RESOURCE Phase 1 schema
-- Sample/demo data only. This is not official curriculum data.

create extension if not exists "pgcrypto";

create table if not exists public.schools (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  county text,
  sub_county text,
  owner_user_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role text not null check (role in ('teacher', 'school_admin', 'system_owner', 'free_teacher', 'premium_teacher')),
  school_id uuid references public.schools(id) on delete set null,
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.resource_library (
  id uuid primary key default gen_random_uuid(),
  school_id uuid references public.schools(id) on delete cascade,
  title text not null,
  description text,
  grade text not null,
  learning_area text not null,
  term text not null,
  year int not null,
  resource_type text not null,
  file_url text,
  uploaded_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create table if not exists public.resource_tags (
  id uuid primary key default gen_random_uuid(),
  resource_id uuid references public.resource_library(id) on delete cascade,
  tag text not null
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  school_id uuid references public.schools(id) on delete cascade,
  user_id uuid references auth.users(id),
  plan text not null check (plan in ('free', 'premium_teacher', 'school_plan')),
  price_ksh numeric(10,2) not null default 0,
  is_active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.ai_sessions (
  id uuid primary key default gen_random_uuid(),
  school_id uuid references public.schools(id) on delete cascade,
  user_id uuid references auth.users(id),
  session_type text not null check (session_type in ('scheme_of_work', 'lesson_plan', 'assignment', 'assessment')),
  prompt text not null,
  output text,
  created_at timestamptz not null default now()
);

alter table public.schools enable row level security;
alter table public.profiles enable row level security;
alter table public.resource_library enable row level security;
alter table public.resource_tags enable row level security;
alter table public.subscriptions enable row level security;
alter table public.ai_sessions enable row level security;

create policy "Schools visible to related members" on public.schools
for select using (
  auth.uid() = owner_user_id
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.school_id = schools.id
  )
);

create policy "Profiles visible to self or same school admin" on public.profiles
for select using (
  auth.uid() = id
  or exists (
    select 1 from public.profiles admin
    where admin.id = auth.uid() and admin.role = 'school_admin' and admin.school_id = profiles.school_id
  )
);

create policy "Allow profile edits by self" on public.profiles
for update using (auth.uid() = id);

create policy "Allow school members to read resources" on public.resource_library
for select using (
  school_id is null
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.school_id = resource_library.school_id
  )
);

create policy "Allow resource inserts to same school" on public.resource_library
for insert with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.school_id = resource_library.school_id
  )
);

create policy "Allow resource updates by school staff" on public.resource_library
for update using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.school_id = resource_library.school_id
  )
);

create policy "School owners may read subscriptions" on public.subscriptions
for select using (
  auth.uid() = user_id
  or exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.school_id = subscriptions.school_id and p.role in ('school_admin', 'system_owner')
  )
);

create policy "AI sessions scoped to school" on public.ai_sessions
for select using (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.school_id = ai_sessions.school_id
  )
);

create policy "AI sessions can be inserted by same-school teacher" on public.ai_sessions
for insert with check (
  exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.school_id = ai_sessions.school_id
  )
);

create or replace function public.update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger schools_updated_at before update on public.schools
for each row execute procedure public.update_updated_at();

create trigger profiles_updated_at before update on public.profiles
for each row execute procedure public.update_updated_at();

create trigger subscriptions_updated_at before update on public.subscriptions
for each row execute procedure public.update_updated_at();

create index if not exists idx_resource_school on public.resource_library(school_id);
create index if not exists idx_resource_grade on public.resource_library(grade);
create index if not exists idx_resource_area on public.resource_library(learning_area);
create index if not exists idx_profiles_school on public.profiles(school_id);

-- This project intentionally keeps AI provider keys on the server. Never expose them in frontend code.
