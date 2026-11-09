import { Building2, FileText, GraduationCap, ShieldCheck, Users } from 'lucide-react';

const schoolStats = [
  { label: 'Active teachers', value: '86', icon: Users },
  { label: 'Verified resources', value: '1,248', icon: FileText },
  { label: 'Classes covered', value: '24', icon: GraduationCap },
  { label: 'Compliance checks', value: '94%', icon: ShieldCheck }
];

export default function SchoolDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="section-label">School dashboard</p>
              <h1 className="mt-2 text-3xl font-black text-slate-900">Murang’a Academy</h1>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-600" /> School active
            </div>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {schoolStats.map((item) => (
            <div key={item.label} className="mobile-card p-4">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <item.icon size={20} />
              </div>
              <p className="text-3xl font-black text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="mobile-card p-5">
            <p className="section-label">School activity</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">Recent compliance and upload activity</h2>
            <div className="mt-5 space-y-4">
              {['Grade 5 English assessments uploaded', 'Science scheme of work reviewed', 'New teacher onboarding completed', 'Term 2 marking guide approved'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                  <span>{item}</span>
                  <span className="text-xs text-slate-500">Today</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mobile-card p-5">
            <p className="section-label">Admin actions</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">School tools</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-700">
              <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3"><span>Invite teacher</span><span>→</span></button>
              <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3"><span>Review resources</span><span>→</span></button>
              <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3"><span>Manage subscriptions</span><span>→</span></button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
