import Link from 'next/link';
import { ArrowLeft, Lock, Mail, UserRound } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
          <ArrowLeft size={16} /> Back home
        </Link>

        <div className="mobile-card p-6 sm:p-7">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-xl font-bold text-white">C</div>
            <p className="section-label">Teacher access</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Welcome back</h1>
          </div>

          <form className="space-y-4">
            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"><Mail size={16} /> Email address</span>
              <input type="email" placeholder="teacher@school.ke" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none ring-0 focus:border-brand-400" />
            </label>

            <label className="block">
              <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"><Lock size={16} /> Password</span>
              <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none ring-0 focus:border-brand-400" />
            </label>

            <div className="flex items-center justify-between text-sm text-slate-600">
              <label className="inline-flex items-center gap-2"><input type="checkbox" className="rounded border-slate-300 text-brand-600" /> Keep me signed in</label>
              <Link href="/" className="font-medium text-brand-700">Forgot password?</Link>
            </div>

            <button type="button" className="primary-btn w-full">Log in</button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            Need an account? <Link href="/register" className="font-bold text-brand-700">Register here</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
