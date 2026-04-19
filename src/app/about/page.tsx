import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import imageMaheen from '@/images/maheen-haq.png'
import { RootLayout } from '@/components/RootLayout'

function Biography() {
  return (
    <Container className="mt-16">
      <FadeIn>
        <div className="lg:flex lg:items-start lg:gap-x-16">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={imageMaheen}
                  alt="Maheen Haq, Attorney at Law"
                  className="w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gold-200" />
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-3/5">
            <Border position="left" className="pl-8">
              <div className="space-y-6 text-base text-warm-700">
                <p>
                  As a grassroots organizer for over a decade, Maheen understands
                  community centered and movement lawyering. She has a wealth of
                  trauma informed training that she brings to her practice. She
                  knows how scary it is to put your body on the line for something
                  you believe in. She will use her personal experiences dealing
                  with police violence and other civil rights issues to create a
                  safe and client centered environment for you.
                </p>
                <p>
                  Maheen started organizing protests and doing civil rights work
                  at the age of thirteen in Hagerstown, Maryland. She taught poetry
                  to young students at the Robert Johnson Community Center and
                  coached soccer for refugees in Baltimore City. Her passion for
                  civil rights led her to Georgetown University Law Center.
                </p>
                <p>
                  At Georgetown, she continued to work on policing issues at the
                  Innovative Policing Center where she researched police violence
                  in Hagerstown, Maryland. At the Georgetown Civil Rights Clinic,
                  Maheen led an investigation of the Hagerstown Police Department.
                </p>
                <p>
                  During her time in law school she worked on police violence
                  issues, tenants&apos; rights, and incarceree rights while working at
                  the Special Litigation Section of the Department of Justice, the
                  Washington Lawyers&apos; Committee and Loevy &amp; Loevy.
                </p>
                <p>
                  Prior to launching her own firm, Maheen worked at a national
                  non-profit defending the civil rights of the Muslim community.
                  She also worked at a prominent regional law firm, where she
                  helped clients navigate employment disputes, sought justice in
                  cases of wrongful police killings and police brutality, and
                  guided businesses through complex disputes, along with other
                  civil litigation matters.
                </p>
              </div>
            </Border>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function Education() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-burgundy-900">
          Education
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="rounded-2xl bg-warm-50 p-6">
            <p className="font-display text-lg font-semibold text-burgundy-900">
              Georgetown University Law Center
            </p>
            <p className="mt-2 text-sm text-warm-600">Juris Doctor (JD)</p>
          </div>
          <div className="rounded-2xl bg-warm-50 p-6">
            <p className="font-display text-lg font-semibold text-burgundy-900">
              Universidad Del Norte
            </p>
            <p className="mt-2 text-sm text-warm-600">International Studies</p>
          </div>
          <div className="rounded-2xl bg-warm-50 p-6">
            <p className="font-display text-lg font-semibold text-burgundy-900">
              University of Maryland Baltimore County
            </p>
            <p className="mt-2 text-sm text-warm-600">Bachelor of Arts (BA), Global Studies &amp; Economics</p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

function Experience() {
  const experiences = [
    {
      organization: 'Georgetown Civil Rights Clinic',
      role: 'Led investigation of Hagerstown Police Department',
    },
    {
      organization: 'Innovative Policing Center',
      role: 'Researched police violence in Hagerstown, Maryland',
    },
    {
      organization: 'Department of Justice',
      role: 'Special Litigation Section',
    },
    {
      organization: 'Washington Lawyers\' Committee',
      role: 'Civil rights litigation',
    },
    {
      organization: 'Loevy & Loevy',
      role: 'Civil rights law firm',
    },
    {
      organization: 'National Non-Profit',
      role: 'Defended civil rights of the Muslim community',
    },
    {
      organization: 'Regional Law Firm',
      role: 'Employment disputes, police brutality cases, civil litigation',
    },
  ]

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-burgundy-900">
          Professional Experience
        </h2>
        <div className="mt-8 space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-start gap-x-4 rounded-xl bg-warm-50 p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500 text-sm font-semibold text-burgundy-950">
                {index + 1}
              </div>
              <div>
                <p className="font-display text-base font-semibold text-burgundy-900">
                  {exp.organization}
                </p>
                <p className="mt-1 text-sm text-warm-600">{exp.role}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Container>
  )
}

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-burgundy-900 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro eyebrow="Our Values" title="What We Stand For" invert>
        <p>
          Haq Law Firm is built on principles that guide every case we take.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Justice" invert>
            We believe everyone deserves equal protection under the law and fight
            relentlessly to ensure our clients receive the justice they deserve.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            We approach every case with empathy and understanding, recognizing the
            human impact of legal issues on our clients and their families.
          </GridListItem>
          <GridListItem title="Community" invert>
            We are committed to giving back and making a positive impact beyond
            the courtroom, including our commitment to give back to vulnerable
            communities through a portion of our profit.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Personal() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <Border position="left" className="pl-8">
          <h2 className="font-display text-2xl font-semibold text-burgundy-900">
            Beyond the Courtroom
          </h2>
          <p className="mt-6 text-base text-warm-700">
            Outside of work, Maheen loves to weightlift, paint, write, and coach
            and play soccer. These pursuits reflect her commitment to physical
            strength, creative expression, and community engagement — values that
            she brings to her legal practice every day.
          </p>
        </Border>
      </FadeIn>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Maheen Haq | Haq Law Firm',
  description:
    'Learn about Maheen Haq, a civil rights attorney dedicated to fighting for justice and protecting the rights of individuals facing discrimination.',
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro eyebrow="About" title="Meet Maheen Haq">
        <p>
          An attorney dedicated to standing up for and defending the civil rights
          of all people.
        </p>
      </PageIntro>

      <Biography />
      <Education />
      <Values />
      <ContactSection />
    </RootLayout>
  )
}
