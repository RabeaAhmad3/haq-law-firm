import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Haq Law Firm',
    default: 'Haq Law Firm | Fighting for Justice. Protecting Your Rights.',
  },
  description:
    'Haq Law Firm provides compassionate, skilled legal representation for employment discrimination, civil rights violations, and commercial litigation.',
  keywords: [
    'civil rights attorney',
    'employment discrimination lawyer',
    'sexual harassment attorney',
    'civil rights law firm',
    'workplace discrimination',
    'Maheen Haq',
    'Haq Law Firm',
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-burgundy-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
