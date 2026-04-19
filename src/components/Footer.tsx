import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'

const navigation = [
  {
    title: 'Practice Areas',
    links: [
      { title: 'Employment Discrimination', href: '/#practice-areas' },
      { title: 'Civil Rights', href: '/#practice-areas' },
    ],
  },
  {
    title: 'Firm',
    links: [
      { title: 'About Maheen', href: '/about' },
      // { title: 'Resources', href: '/blog' },
      { title: 'Contact', href: '/contact' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-burgundy-900">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-warm-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-burgundy-900"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ContactInfo() {
  return (
    <div className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-burgundy-900">
        Contact Us
      </h2>
      <address className="mt-4 text-sm not-italic text-warm-700">
        <p className="font-semibold text-warm-900">Haq Law Firm</p>
        <p className="mt-2">1601 Connecticut Ave NW, Suite 700</p>
        <p>Washington, DC 20009</p>
      </address>
      <div className="mt-4 text-sm text-warm-700">
        <p>
          <a href="tel:+1XXXXXXXXXX" className="hover:text-burgundy-900 transition">
            (240) 490-2868
          </a>
        </p>
        <p className="mt-1">
          <a href="mailto:maheen@haqlegal.com" className="hover:text-burgundy-900 transition">
            maheen@haqlegal.com
          </a>
        </p>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <ContactInfo />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-warm-200 pt-12">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
          <div className="text-right">
            <p className="text-sm text-warm-700">
              © Haq Law Firm {new Date().getFullYear()}. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-warm-500">
              This website is for informational purposes only and does not
              constitute legal advice. Attorney advertising.
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
