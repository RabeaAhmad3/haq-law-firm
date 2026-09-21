import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

import '@/styles/tailwind.css'
import { homeTitle, homeDescription } from '@/lib/metadata'

export const metadata: Metadata = {
  metadataBase: new URL('https://haqlegal.com'),
  title: {
    template: '%s | Haq Law Firm',
    default: homeTitle,
  },
  description: homeDescription,
  keywords: [
    'estate planning attorney',
    'wills and trusts lawyer',
    'Islamic will lawyer',
    'Islamic estate planning',
    'Muslim estate planning attorney',
    'power of attorney',
    'civil rights attorney',
    'employment discrimination lawyer',
    'sexual harassment attorney',
    'civil rights law firm',
    'workplace discrimination',
    'Maheen Haq',
    'Haq Law Firm',
  ],
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: 'https://haqlegal.com',
    siteName: 'Haq Law Firm',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: homeTitle,
    description: homeDescription,
  },
  verification: {
    google: 'KAhu8LEFhnxdEsiaMNXNGEnJmtZG_j8sWdjbFV102cg',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-burgundy-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
