import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { GridPattern } from '@/components/GridPattern'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import imageMaheen from '../../maheenhaq.png'
import { RootLayout } from '@/components/RootLayout'

function Hero() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <div className="lg:flex lg:items-center lg:gap-x-16">
        <FadeIn className="max-w-2xl lg:max-w-none lg:flex-1">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-burgundy-900 sm:text-7xl">
            Fighting for Justice. Protecting Your Rights.
          </h1>
          <p className="mt-6 text-xl text-warm-700">
            When your rights, your livelihood, or your dignity are at stake, you
            need more than just a lawyer — you need an advocate. I provide
            compassionate, skilled, and relentless legal representation to
            individuals and families. Whether you&apos;ve experienced sexual
            harassment at work, faced ethnic or racial discrimination, or have
            suffered from police violence, I am here to guide you every step of
            the way.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#contact">Schedule a Consultation</Button>
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
            We&apos;re dedicated to providing high quality legal services to those
            that need it most.
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
                better place both inside and outside the courtroom. That&apos;s why{' '}
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

const practiceAreas = [
  {
    title: 'Workplace Discrimination & Harassment',
    description:
      'I represent employees who have been subjected to workplace injustice and fight to hold employers accountable.',
    items: [
      'Sexual harassment or assault in the workplace',
      'Gender-based discrimination',
      'Ethnic or racial discrimination',
      'Hostile work environment',
    ],
  },
  {
    title: 'Civil Rights & Discrimination',
    description:
      'I advocate for individuals whose rights have been violated.',
    items: [
      'Police misconduct and brutality',
      'Excessive force',
      'Incarceree rights',
    ],
  },
  {
    title: 'Wrongful Termination & Retaliation',
    description:
      'I fight for employees who have been punished for standing up for their rights.',
    items: [
      'Wrongful termination',
      'Retaliation for reporting misconduct',
      'Whistleblower protection',
      'Unpaid wages and overtime violations',
    ],
  },
]

function PracticeAreas() {
  return (
    <div id="practice-areas">
      <SectionIntro
        eyebrow="Practice Areas"
        title="Dedicated legal representation when you need it most."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Maheen Haq is an attorney dedicated to standing up for and defending
          the civil rights of all people.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <FadeIn key={area.title} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-burgundy-900/10 transition hover:bg-warm-50 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-burgundy-900">
                  {area.title}
                </h3>
                <p className="mt-4 text-base text-warm-600">
                  {area.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-x-2 text-sm text-warm-700"
                    >
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-gold-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

const testimonials = [
  {
    content:
      'Maheen fought tirelessly for my case when I experienced harassment at work. Her compassion and expertise made an incredibly difficult time more bearable. I am forever grateful for her dedication.',
    author: 'J.S.',
    caseType: 'Employment Discrimination Case',
  },
  {
    content:
      'Professional, compassionate, and effective. Maheen took the time to truly understand my situation and built a strong case that got results. I would recommend her to anyone facing discrimination.',
    author: 'M.R.',
    caseType: 'Civil Rights Case',
  },
  {
    content:
      'She truly understood what I was going through and fought for justice when I felt completely powerless. Maheen is not just a lawyer — she is an advocate who genuinely cares about her clients.',
    author: 'A.T.',
    caseType: 'Workplace Harassment Case',
  },
]

function Testimonials() {
  return (
    <div className="relative mt-24 bg-warm-50 py-20 sm:mt-32 sm:py-28 lg:mt-40 lg:py-32">
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-warm-100 stroke-warm-200 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <h2 className="font-display text-3xl font-medium tracking-tight text-burgundy-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-warm-600">
            Placeholder testimonials for UI/UX testing. Real testimonials will
            be added.
          </p>
        </FadeIn>
        <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-warm-200">
                <blockquote className="flex-1">
                  <p className="text-base leading-relaxed text-warm-700">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 border-t border-warm-100 pt-6">
                  <p className="font-display text-base font-semibold text-burgundy-900">
                    {testimonial.author}
                  </p>
                  <p className="mt-1 text-sm text-gold-600">
                    {testimonial.caseType}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

function AboutPreview() {
  return (
    <div className="relative mt-24 bg-warm-50 py-20 sm:mt-32 sm:py-28 lg:mt-40 lg:py-32">
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-warm-100 stroke-warm-200 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
    <Container>
      <FadeIn>
        <div className="lg:flex lg:items-center lg:gap-x-16">
          <div className="lg:w-1/2">
            <Border position="left" className="pl-8">
              <h2 className="font-display text-3xl font-medium tracking-tight text-burgundy-900 sm:text-4xl">
                Meet Maheen Haq
              </h2>
              <p className="mt-6 text-base text-warm-700">
                With over a decade of experience as a grassroots organizer,
                Maheen brings a deep understanding of community-centered and
                movement lawyering to her practice. Her extensive
                trauma-informed training, combined with firsthand experience
                navigating police violence and other civil rights issues, allows
                her to meet clients where they are. She knows how scary it is to
                put your body on the line for something you believe in — and
                she&apos;s committed to creating a safe, client-centered
                environment every step of the way.
              </p>
              <div className="mt-8">
                <Button href="/about">Learn More About Maheen</Button>
              </div>
            </Border>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={imageMaheen}
                  alt="Maheen Haq"
                  className="w-full object-cover grayscale transition duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Haq Law Firm | Fighting for Justice. Protecting Your Rights.',
  description:
    'Haq Law Firm provides compassionate, skilled legal representation for employment discrimination and civil rights violations.',
}

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <Mission />
      <PracticeAreas />
      {/* <Testimonials /> */}
      <AboutPreview />
      <ContactSection />
    </RootLayout>
  )
}
