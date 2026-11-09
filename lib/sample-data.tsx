import { Crown, Database, Lock, ShieldCheck, Users } from 'lucide-react';

export default function SystemOwnerDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <p className="section-label">System owner</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Platform operations</h1>
        </header>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Schools', '42', Users],
            ['Teachers', '1,864', Users],
            ['Database security', 'RLS active', Lock],
            ['Platform status', 'Operational', ShieldCheck]
          ].map(([label, value, Icon]) => (
            <div key={String(label)} className="mobile-card p-4">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                {Icon && <Icon size={20} />}
              </div>
              <p className="text-3xl font-black text-slate-900">{String(value)}</p>
              <p className="mt-2 text-sm text-slate-600">{String(label)}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <div className="mobile-card p-5">
            <h2 className="text-xl font-bold text-slate-900">Trust and compliance</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">Supabase authentication foundation ready for Email/Password flows.</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">School row-isolation policies to be extended as permissions expand.</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">AI provider secrets remain server-side only.</div>
            </div>
          </div>

          <div className="mobile-card p-5">
            <h2 className="text-xl font-bold text-slate-900">Growth and operations</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">Free teacher plan for onboarding and exploration.</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">Premium teacher plan for advanced resource packs and AI support.</div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">Future subscription rollout remains inactive in this Phase 1 build.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
