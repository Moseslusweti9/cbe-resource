import Link from 'next/link';
import { Activity, Bell, BookMarked, CalendarDays, FolderKanban, GraduationCap, MessageSquareText, Search, Sparkles } from 'lucide-react';
import { dashboardCards, monthlyCoverage, recentResources } from '@/lib/sample-data';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="section-label">Teacher workspace</p>
            <h1 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">Good morning, Jane</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-slate-400" size={18} />
              <input placeholder="Search resources" className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 sm:w-60" />
            </div>
            <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600"><Bell size={18} /></button>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardCards.map((card) => (
            <div key={card.label} className="mobile-card p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">{card.label}</span>
                <span className="rounded-full bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700">{card.trend}</span>
              </div>
              <p className="text-3xl font-black text-slate-900">{card.value}</p>
              <p className="mt-2 text-sm text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
          <div className="mobile-card p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="section-label">Coverage</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">Monthly resource coverage</h2>
              </div>
              <button className="chip">Term 2</button>
            </div>
            <div className="space-y-4">
              {monthlyCoverage.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-100">
                    <div className="h-2.5 rounded-full bg-brand-500" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="mobile-card p-4">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="text-brand-600" size={18} />
                <p className="section-label">AI assistant</p>
              </div>
              <p className="text-sm leading-6 text-slate-600">Draft scheme of work, lesson plan ideas and assignment prompts using school-approved templates.</p>
              <Link href="/" className="primary-btn mt-4 w-full">Open AI teaching assistant</Link>
            </div>

            <div className="mobile-card p-4">
              <div className="mb-3 flex items-center gap-2">
                <BookMarked className="text-brand-600" size={18} />
                <p className="section-label">Quick actions</p>
              </div>
              <div className="space-y-2 text-sm text-slate-700">
                <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3"><span>New lesson plan</span><ArrowRight /></button>
                <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3"><span>Assessment bank</span><ArrowRight /></button>
                <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3"><span>Submit resource</span><ArrowRight /></button>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8 mobile-card p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="section-label">Recent resources</p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">Latest additions</h2>
            </div>
            <Link href="/resources" className="text-sm font-semibold text-brand-700">View all</Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {recentResources.map((resource) => (
              <div key={resource.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="chip">{resource.grade}</span>
                  <span className="text-xs font-medium text-slate-500">{resource.type}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{resource.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{resource.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>{resource.area}</span>
                  <span>{resource.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function ArrowRight(props: { size?: number }) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>;
}
