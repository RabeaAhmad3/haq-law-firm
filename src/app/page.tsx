import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { Button } from '@/components/Button'
import imageMaheen from '../../maheenhaq.png'
import imageEstatePlan from '@/images/ahmed-family-estate-plan.png'
import { RootLayout } from '@/components/RootLayout'
import { practiceAreas } from '@/lib/practiceAreas'
import { homeTitle, homeDescription, pageMetadata } from '@/lib/metadata'

function Hero() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="lg:flex lg:items-center lg:gap-x-16">
        <FadeIn className="max-w-2xl lg:max-w-none lg:flex-1">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-burgundy-900 sm:text-7xl">
            Protecting Your Rights. Preserving What You Leave Behind.
          </h1>
          <p className="mt-6 text-xl text-warm-700">
            Haq Law Firm is a boutique firm providing estate planning,
            employment, and civil rights services with the personal attention
            you deserve.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Schedule a Consultation</Button>
            <Button href="tel:+12404902868" invert>
              Call Now
            </Button>
          </div>
        </FadeIn>
        <FadeIn className="mt-16 lg:mt-0 lg:flex-1">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-burgundy-50">
              <Image
                src={imageMaheen}
                alt="Maheen Haq, Attorney at Law"
                className="w-full object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-3xl bg-gold-200" />
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

function Mission() {
  return (
    <div className="mt-24 rounded-4xl bg-burgundy-900 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg text-burgundy-100">
            We&apos;re dedicated to providing high quality legal services to
            those that need it most.
          </p>
          <div className="mt-10 flex items-start gap-x-6 rounded-2xl bg-burgundy-800/50 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-500 text-burgundy-950">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium text-gold-400">
                Making a Lasting Impact
              </p>
              <p className="mt-2 text-burgundy-100">
                The Haq Law Firm is built on a commitment to making the world a
                better place both inside and outside the courtroom. That&apos;s
                why{' '}
                <span className="font-semibold text-gold-400">
                  a portion of our profits are donated to people who need it the
                  most
                </span>{' '}
                — turning every client partnership into lasting change. So far
                some of our projects include providing clean water to survivors
                of the genocide in Gaza and the building of wells for
                communities struggling with water insecurity.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function PracticeAreas() {
  return (
    <section id="practice-areas">
      <SectionIntro
        eyebrow="Practice Areas"
        title="A clear path for your legal needs."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Planning for the future. Protecting your livelihood. Standing up for
          your rights. Find the support that fits your needs.
        </p>
      </SectionIntro>
      <Container className="mt-12">
        <FadeInStagger className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <FadeIn key={area.href} className="flex">
              <Link
                href={area.href}
                className="group flex w-full flex-col rounded-3xl bg-white/60 p-8 ring-1 ring-burgundy-900/10 transition hover:bg-gold-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy-600"
              >
                <h3 className="font-display text-2xl font-semibold text-burgundy-900">
                  {area.title}
                </h3>
                <p className="mt-4 flex-1 text-base text-warm-700">
                  {area.description}
                </p>
                <span className="mt-8 text-sm font-semibold text-burgundy-600">
                  Explore {area.title}{' '}
                  <span
                    aria-hidden="true"
                    className="inline-block transition group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function IslamicPlanningPreview() {
  return (
    <Container className="mt-24 sm:mt-32">
      <FadeIn className="grid items-center gap-10 rounded-3xl bg-gold-100 p-8 sm:p-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold text-gold-800">
            Your family. Your wishes. Your faith.
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-burgundy-900 sm:text-4xl">
            Why Islamic Estate Planning Matters
          </h2>
          <p className="mt-6 text-lg text-warm-700">
            Without a plan that accounts for your wishes, Maryland intestacy law
            determines who inherits your probate estate. I help Muslim families
            create wills and trusts that reflect Islamic inheritance principles
            and meet Maryland&apos;s legal requirements.
          </p>
          <Link
            href="/estate-planning#islamic-estate-planning"
            className="mt-6 inline-flex text-base font-semibold text-burgundy-600 underline underline-offset-4"
          >
            Explore Islamic Estate Planning{' '}
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
        <Image
          src={imageEstatePlan}
          alt="Burgundy leather estate plan binder with gold lettering for the Ahmed family"
          className="h-auto w-full max-w-sm justify-self-center rounded-2xl lg:justify-self-end"
          sizes="(min-width: 1280px) 384px, (min-width: 1024px) 32vw, (min-width: 512px) 384px, calc(100vw - 112px)"
          placeholder="blur"
        />
      </FadeIn>
    </Container>
  )
}

export const metadata = pageMetadata(homeTitle, homeDescription, '/')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: 'Maheen Haq',
  alternateName: 'Haq Law Firm',
  description: homeDescription,
  url: 'https://haqlegal.com',
  telephone: '+1-240-490-2868',
  email: 'maheen@haqlegal.com',
  knowsAbout: [
    'Estate Planning',
    'Islamic Estate Planning',
    'Wills and Trusts',
    'Power of Attorney',
    'Medical Directives',
    'Guardianship Planning',
    'Employment Discrimination',
    'Civil Rights',
    'Sexual Harassment',
    'Workplace Discrimination',
    'Wrongful Termination',
    'Police Misconduct',
    'Whistleblower Protection',
  ],
  priceRange: '$$',
  '@graph': [
    {
      '@type': 'LegalService',
      name: 'Haq Law Firm',
      url: 'https://haqlegal.com',
      description: homeDescription,
      serviceType: [
        'Estate Planning',
        'Islamic Estate Planning',
        'Wills and Trusts',
        'Employment Discrimination',
        'Civil Rights',
        'Wrongful Termination',
        'Workplace Harassment',
      ],
      provider: {
        '@type': 'Attorney',
        name: 'Maheen Haq',
      },
    },
  ],
}

export default function Home() {
  return (
    <RootLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <PracticeAreas />
      <IslamicPlanningPreview />
      <Mission />
      <ContactSection />
    </RootLayout>
  )
}
