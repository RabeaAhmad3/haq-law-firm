import { type Metadata } from 'next'

export const homeTitle =
  'Haq Law Firm | Estate Planning, Islamic Wills & Trusts, Employment & Civil Rights Law'

export const homeDescription =
  'Haq Law Firm provides wills, trusts, and Islamic estate planning in Maryland, plus employment discrimination and civil rights representation.'

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = path === '/' ? title : `${title} | Haq Law Firm`
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: 'Haq Law Firm',
      locale: 'en_US',
      type: 'website',
    },
    twitter: { card: 'summary', title: fullTitle, description },
  }
}
