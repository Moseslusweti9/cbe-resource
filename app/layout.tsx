import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CBE RESOURCE',
  description: 'Mobile-first education resource management for Kenyan schools and teachers.',
  manifest: '/manifest.webmanifest',
  keywords: ['education', 'Kenya', 'CBC', 'CBE', 'resources', 'schools', 'teachers'],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'CBE RESOURCE'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
