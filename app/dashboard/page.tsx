import Link from 'next/link';
import { ArrowLeft, Building2, School, UserRound } from 'lucide-react';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
          <ArrowLeft size={16} /> Back home
        </Link>

        <div className="mobile-card p-6 sm:p-8">
          <div className="mb-6 text-center">
            <p className="section-label">Get started</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Create your CBE RESOURCE account</h1>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-700"><UserRound size={22} /></div>
              <h2 className="text-xl font-bold text-slate-900">Teacher registration</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Create a personal teacher profile, access learning resources and manage classroom planning.</p>
              <button type="button" className="primary-btn mt-5 w-full">Register as teacher</button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-slate-700"><Building2 size={22} /></div>
              <h2 className="text-xl font-bold text-slate-900">School registration</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Set up your school, invite staff and manage shared assessments and resource libraries.</p>
              <button type="button" className="secondary-btn mt-5 w-full">Register school</button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Full name</span>
              <input type="text" placeholder="Jane Wanjiku" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-brand-400" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Role</span>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-brand-400">
                <option>Teacher</option>
                <option>School admin</option>
                <option>System owner</option>
                <option>Premium teacher</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">School name</span>
              <input type="text" placeholder="Murang’a Academy" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-brand-400" />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email address</span>
              <input type="email" placeholder="jane@school.ke" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-brand-400" />
            </label>
          </div>

          <button type="button" className="primary-btn mt-6 w-full">Create account</button>
          <p className="mt-4 text-center text-sm text-slate-600">Already have an account? <Link href="/login" className="font-bold text-brand-700">Log in</Link></p>
        </div>
      </div>
    </main>
  );
}
