import Link from 'next/link';
import { ArrowRight, BookOpenCheck, CheckCircle2, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { roleCards, statCards, teacherHighlights, demoPricing } from '@/lib/sample-data';

export default function HomePage() {
  return (
    <main className="app-shell">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">C</div>
            <div>
              <p className="text-lg font-extrabold tracking-tight text-slate-900">CBE RESOURCE</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Kenya education platform</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <Link href="#features">Features</Link>
            <Link href="#roles">Roles</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#demo">Demo Data</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login" className="secondary-btn hidden sm:inline-flex">Log in</Link>
            <Link href="/register" className="primary-btn">Register</Link>
          </div>
        </div>
      </header>

      <section className="grid-hero">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <span className="chip mb-4">Demo-first Phase 1</span>
            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Teaching resources that work for every Kenyan classroom.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              CBE RESOURCE is a mobile-first platform for teachers, school leaders and system owners managing CBC/CBE resources across grades 1–12.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="primary-btn">Create school account</Link>
              <Link href="/dashboard" className="secondary-btn">Open demo dashboard</Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {statCards.map((stat) => (
                <div key={stat.label} className="mobile-card p-4">
                  <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mobile-card p-4 sm:p-6">
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-300">School overview</p>
                  <h2 className="mt-2 text-2xl font-bold">Murang’a Academy</h2>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-300">Active</span>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Resources</p>
                  <div className="mt-2 flex items-end justify-between">
                    <span className="text-3xl font-black">1,248</span>
                    <span className="text-sm text-emerald-300">+18% this term</span>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Teachers</p>
                    <p className="mt-2 text-2xl font-black">86</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Classes</p>
                    <p className="mt-2 text-2xl font-black">24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="section-label">Platform strengths</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Built for the realities of Kenyan schools</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {teacherHighlights.map((item) => (
            <div key={item.title} className="mobile-card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                {item.icon === 'book' ? <BookOpenCheck size={22} /> : item.icon === 'spark' ? <Sparkles size={22} /> : <ShieldCheck size={22} />}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roles" className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="section-label text-brand-200">Roles</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Roles designed for school operations</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {roleCards.map((role) => (
              <div key={role.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/20 text-brand-100">
                  {role.icon === 'teacher' ? <Users size={20} /> : <CheckCircle2 size={20} />}
                </div>
                <h3 className="text-xl font-bold">{role.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="section-label">Demo pricing</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Flexible plans for schools and teachers</h2>
          <p className="mt-3 text-slate-600">Pricing below is sample planning data only. No paid transactions are enabled in this Phase 1 build.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {demoPricing.map((plan) => (
            <div key={plan.name} className={`mobile-card p-6 ${plan.featured ? 'border-brand-300 bg-brand-50' : ''}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                {plan.featured && <span className="chip">Popular</span>}
              </div>
              <p className="mt-5 text-4xl font-black text-slate-900">KSh {plan.price}<span className="text-base font-medium text-slate-500">/{plan.period}</span></p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-dashed border-slate-300 bg-white p-8">
          <p className="section-label">Sample data only</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Demo content is clearly labeled and not official curriculum text</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            All example resources, lesson plans, activities and school metadata are sample placeholders designed for product planning. Nothing in this repository should be treated as authoritative CBC/CBE curriculum content.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="chip">Grades 1–12</span>
            <span className="chip">CBC/CBE</span>
            <span className="chip">Teacher workspace</span>
            <span className="chip">School dashboard</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 CBE RESOURCE</p>
          <div className="flex items-center gap-4">
            <Link href="/login">Teacher login</Link>
            <Link href="/register">School registration</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
