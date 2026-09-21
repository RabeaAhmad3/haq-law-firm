import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import imageProtest from '@/images/maheen-palestine-protest.png'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata(
  'Civil Rights',
  'Civil rights representation — police misconduct, excessive force, and incarceree rights — from Haq Law Firm.',
  '/civil-rights',
)

export default function CivilRights() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Practice Areas" title="Civil Rights">
        <p>
          I advocate for individuals whose rights have been violated. My
          practice brings together civil rights litigation, years of grassroots
          organizing, and a commitment to meeting clients with compassion and
          respect.
        </p>
      </PageIntro>
      <Container className="mt-16 sm:mt-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h2 className="font-display text-3xl font-medium tracking-tight text-burgundy-900">
              Civil Rights &amp; Discrimination
            </h2>
            <p className="mt-6 text-lg text-warm-700">
              When your rights or your dignity are at stake, you need an
              advocate who will listen. I provide compassionate, skilled, and
              determined legal representation to individuals and families
              seeking accountability.
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base text-warm-700 marker:text-burgundy-600">
              <li>Police misconduct and brutality</li>
              <li>Excessive force</li>
              <li>Incarceree rights</li>
            </ul>
            <div className="mt-10 border-t border-burgundy-900/10 pt-10">
              <h2 className="font-display text-2xl font-semibold text-burgundy-900">
                Rooted in community
              </h2>
              <p className="mt-6 text-base text-warm-700">
                With over a decade of experience as a grassroots organizer,
                Maheen understands community-centered and movement lawyering.
                Her trauma-informed training and personal experience navigating
                police violence inform a practice where clients can feel heard
                and supported every step of the way.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <figure>
              <Image
                src={imageProtest}
                alt="Maheen Haq speaking into a microphone with her fist raised at a Palestine protest"
                className="h-auto w-full rounded-3xl"
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
                placeholder="blur"
              />
            </figure>
          </FadeIn>
        </div>
      </Container>
      <ContactSection />
    </RootLayout>
  )
}
