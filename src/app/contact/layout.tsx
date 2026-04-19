import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Haq Law Firm',
  description:
    'Contact Haq Law Firm to schedule a confidential consultation about your employment discrimination or civil rights case.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
