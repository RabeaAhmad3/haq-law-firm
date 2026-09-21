import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata(
  'Contact',
  'Contact Haq Law Firm to schedule a confidential consultation about estate planning, Islamic wills and trusts, employment matters, or civil rights.',
  '/contact',
)

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
