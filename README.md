# CBE RESOURCE

CBE RESOURCE is a mobile-first education resource management platform for Kenyan teachers and schools. This repository contains the Phase 1 foundation for the product experience, navigation, authentication flows, and Supabase database schema.

Important: this repository is intentionally a demo foundation for UI and data structure. It does not claim that production-grade AI, payments, or curriculum editing features are already live.

## Included in Phase 1
- Responsive landing page and dashboard shell
- Teacher registration and login UI
- School registration flow
- Role-based layouts for teacher, school admin, system owner, and premium/free teacher
- Assessment resource library with filters (grade, learning area, term, year)
- School dashboard and teacher workspace mockups
- Supabase schema for schools, users, resource library, subscriptions, and AI sessions
- RLS policies for school-level isolation
- PWA-ready metadata for Android-friendly installability
- Demo content clearly labeled as sample data

## Stack
- Next.js 14 + TypeScript + Tailwind CSS
- Supabase client SDK and SQL schema for database foundation
- Mobile-first UI suitable for Android devices

## Local setup
1. Install dependencies:
   npm install
2. Copy `.env.example` to `.env.local` and fill in your Supabase values.
3. Run the app:
   npm run dev
4. Open http://localhost:3000

## Supabase setup
1. Create a Supabase project.
2. Run the SQL in `supabase/schema.sql` in the SQL editor.
3. Configure Auth with Email/Password enabled.
4. Add storage buckets as desired and keep AI provider keys on the server only.

## Security notes
- Do not place AI provider keys in client-side code.
- Keep all server secrets in environment variables and server-side functions only.
- RLS is defined in `supabase/schema.sql` to isolate school data.
- Use demo pricing in KSh but do not activate real payment flows yet.

## Pricing note
Starter pricing on the interface is expressed in Kenyan Shillings for planning only. Payment processing is intentionally not activated in this Phase 1 build.
