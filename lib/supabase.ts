import { BookOpenText, ShieldCheck, Sparkles } from 'lucide-react';

export const statCards = [
  { value: '1.2K+', label: 'resource items' },
  { value: '86%', label: 'teacher adoption' },
  { value: '24', label: 'schools onboarded' }
];

export const teacherHighlights = [
  {
    title: 'CBC/CBE aligned planning',
    description: 'Organize resources by grade, subject and term so teachers can prepare lessons quickly on mobile devices.',
    icon: 'book'
  },
  {
    title: 'AI-assisted drafting',
    description: 'Generate scheme of work drafts, lesson plans and assignment ideas in a secure server-side workflow.',
    icon: 'spark'
  },
  {
    title: 'School-level security',
    description: 'Keep schools isolated with structured access, role controls and computed policies ready for Supabase RLS.',
    icon: 'shield'
  }
];

export const roleCards = [
  { title: 'Teacher', description: 'Manage lessons, assessments and classroom resources by grade and learning area.', icon: 'teacher' },
  { title: 'School admin', description: 'Approve uploads, review school performance and coordinate teacher onboarding.', icon: 'admin' },
  { title: 'System owner', description: 'Monitor platform health, permissions, and school-wide compliance patterns.', icon: 'owner' },
  { title: 'Free/Premium teacher', description: 'Access flexible plans and upgrade paths for advanced resource packs and AI workflows.', icon: 'premium' }
];

export const demoPricing = [
  { name: 'Free', price: '0', period: 'month', features: ['Teacher profile', 'Basic resource access', 'Demo school workspace'], featured: false },
  { name: 'Premium teacher', price: '1,200', period: 'month', features: ['Advanced resource packs', 'AI lesson drafting', 'Priority downloads'], featured: true },
  { name: 'School plan', price: '8,500', period: 'month', features: ['Multi-teacher access', 'School admin controls', 'Shared resource library'], featured: false }
];

export const dashboardCards = [
  { label: 'Resources ready', value: '168', trend: '+12%', description: 'Resources uploaded this month' },
  { label: 'Lessons planned', value: '46', trend: '+8%', description: 'Lesson plans in progress' },
  { label: 'Assessments', value: '29', trend: '+15%', description: 'Assessment packs this term' },
  { label: 'AI suggestions', value: '12', trend: '+4', description: 'Drafts available for review' }
];

export const monthlyCoverage = [
  { label: 'Mathematics', value: 82 },
  { label: 'English', value: 74 },
  { label: 'Science', value: 68 },
  { label: 'Social Studies', value: 59 }
];

export const recentResources = [
  { title: 'Grade 6 Number Patterns Pack', description: 'Sample classroom activity set for foundational numeracy development.', grade: 'Grade 6', area: 'Mathematics', term: 'Term 2', type: 'Worksheet', date: '2026-05-08' },
  { title: 'Form 1 English Writing Rubric', description: 'Example rubric for classroom writing and grammar assessment tasks.', grade: 'Form 1', area: 'English', term: 'Term 1', type: 'Rubric', date: '2026-05-06' },
  { title: 'Science Practical Activity Sheet', description: 'Hands-on experimental template for topic-based science learning.', grade: 'Grade 8', area: 'Science', term: 'Term 3', type: 'Activity', date: '2026-05-01' }
];

export const resourceLibrary = [
  { title: 'Fraction Strategies Guide', description: 'Demonstration worksheet with practice tasks for classroom use.', grade: 'Grade 5', year: '2026', area: 'Mathematics', term: 'Term 2', type: 'Worksheet' },
  { title: 'Reading Comprehension Set', description: 'Sample passages and discussion prompts for English language learning.', grade: 'Grade 4', year: '2026', area: 'English', term: 'Term 1', type: 'Reading' },
  { title: 'Plant Growth Observations', description: 'Observation log and experimental template for science learning.', grade: 'Grade 7', year: '2026', area: 'Science', term: 'Term 3', type: 'Practical' },
  { title: 'History Timeline Notes', description: 'Sample notes and event mapping worksheet for social studies.', grade: 'Grade 8', year: '2025', area: 'Social Studies', term: 'Term 2', type: 'Notes' },
  { title: 'Home Science Project Brief', description: 'Starter project sheet for practical meal planning and kitchen safety.', grade: 'Form 2', year: '2026', area: 'Home Science', term: 'Term 1', type: 'Project' },
  { title: 'Assessment Marking Guide', description: 'Demo marking rubric used to align classroom scoring and moderation.', grade: 'Forms 1-3', year: '2026', area: 'Assessment', term: 'Term 3', type: 'Marking Scheme' }
];
