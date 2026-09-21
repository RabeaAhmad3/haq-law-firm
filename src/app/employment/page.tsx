import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import imageConsultation from '@/images/employment-consultation.png'
import { pageMetadata } from '@/lib/metadata'

const services = [
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

export const metadata = pageMetadata(
  'Employment',
  'Employment discrimination, harassment, and wrongful termination representation from Haq Law Firm.',
  '/employment',
)

export default function Employment() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <FadeIn>
            <p className="font-display text-base font-semibold text-burgundy-900">
              Practice Areas
            </p>
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-balance text-burgundy-900 sm:text-6xl">
              Employment
            </h1>
            <p className="mt-6 max-w-xl text-xl text-warm-600">
              When your livelihood or dignity is at stake, you deserve an
              advocate. I represent employees facing workplace harassment,
              discrimination, wrongful termination, and retaliation, and fight
              to hold employers accountable.
            </p>
          </FadeIn>
          <FadeIn className="w-full max-w-md justify-self-center lg:justify-self-end">
            <Image
              src={imageConsultation}
              alt="An employee speaking with an attentive advocate during a consultation"
              className="h-auto w-full rounded-3xl"
              sizes="(min-width: 1120px) 448px, (min-width: 1024px) 40vw, (min-width: 496px) 448px, calc(100vw - 48px)"
              placeholder="blur"
              priority
            />
          </FadeIn>
        </div>
      </Container>
      <Container className="mt-16 sm:mt-24">
        <FadeInStagger className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <FadeIn
              key={service.title}
              className="rounded-3xl bg-white/60 p-8 ring-1 ring-burgundy-900/10 sm:p-10"
            >
              <h2 className="font-display text-2xl font-semibold text-burgundy-900">
                {service.title}
              </h2>
              <p className="mt-6 text-lg text-warm-700">
                {service.description}
              </p>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-base text-warm-700 marker:text-burgundy-600">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
      <ContactSection />
    </RootLayout>
  )
}
