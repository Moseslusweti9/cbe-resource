import { Filter, Search } from 'lucide-react';
import { resourceLibrary } from '@/lib/sample-data';

export default function ResourceLibraryPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="section-label">Assessment resource library</p>
              <h1 className="mt-2 text-3xl font-black text-slate-900">Resource catalog</h1>
            </div>
            <button className="primary-btn">Upload resource</button>
          </div>
        </header>

        <div className="mb-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={18} />
            <input placeholder="Search title, subject or keyword" className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3" />
          </div>
          <select className="rounded-xl border border-slate-200 bg-white px-3 py-3">
            <option>All grades</option>
            <option>Grade 1-3</option>
            <option>Grade 4-6</option>
            <option>Grade 7-9</option>
            <option>Grade 10-12</option>
          </select>
          <select className="rounded-xl border border-slate-200 bg-white px-3 py-3">
            <option>All learning areas</option>
            <option>Mathematics</option>
            <option>English</option>
            <option>Science</option>
            <option>Social Studies</option>
          </select>
          <select className="rounded-xl border border-slate-200 bg-white px-3 py-3">
            <option>All terms</option>
            <option>Term 1</option>
            <option>Term 2</option>
            <option>Term 3</option>
          </select>
        </div>

        <div className="mb-6 flex items-center gap-2 text-sm text-slate-600">
          <Filter size={16} /> <span>Filters ready for grade, learning area, term and year</span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resourceLibrary.map((resource) => (
            <article key={resource.title} className="mobile-card p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="chip">{resource.grade}</span>
                <span className="text-xs font-medium text-slate-500">{resource.year}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">{resource.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{resource.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                <span className="rounded-full bg-slate-100 px-2 py-1">{resource.area}</span>
                <span className="rounded-full bg-slate-100 px-2 py-1">{resource.term}</span>
                <span className="rounded-full bg-slate-100 px-2 py-1">{resource.type}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
