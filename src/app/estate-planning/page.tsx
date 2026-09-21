import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import imageOliveTree from '@/images/estate-planning-olive-tree.png'
import imageGenerations from '@/images/estate-planning-generations.png'
import { pageMetadata } from '@/lib/metadata'

const planningServices = [
  {
    id: 'wills',
    title: 'Wills',
    description:
      'A will puts your wishes in writing and gives the people you love a clearer path forward. I help you decide who should receive your probate assets and who you trust to carry out your wishes.',
    items: [
      'Last will and testament',
      'Beneficiary planning',
      'Naming a personal representative to handle your estate',
    ],
  },
  {
    id: 'trusts',
    title: 'Trusts',
    description:
      'A trust can provide a plan for how assets are managed and distributed. We’ll talk through your goals and whether a revocable or irrevocable trust fits your family’s needs.',
    items: [
      'Revocable trusts',
      'Irrevocable trusts',
      'Coordinating trust provisions with the rest of your estate plan',
    ],
  },
  {
    id: 'medical-directives',
    title: 'Medical Directives',
    description:
      'Make your healthcare wishes known before someone needs to act on your behalf. An advance directive can record your care preferences and name a person you trust to make healthcare decisions if you cannot.',
    items: [
      'Living wills and advance healthcare directives',
      'Choosing a healthcare agent',
      'Documenting treatment preferences',
    ],
  },
  {
    id: 'power-of-attorney',
    title: 'Power of Attorney',
    description:
      'A durable financial power of attorney gives someone you choose authority to handle specified financial matters on your behalf, including if you become unable to manage them yourself.',
    items: [
      'Durable financial power of attorney',
      'Choosing a trusted agent and backup',
      'Defining the scope of your agent’s authority',
    ],
  },
  {
    id: 'guardianship',
    title: 'Guardianship',
    description:
      'Planning for minor children means thinking about who you would want to care for them. I help you document your choice of guardian and coordinate those wishes with your estate plan, subject to court approval.',
    items: [
      'Guardian nominations for minor children',
      'Naming an alternate guardian',
      'Coordinating care wishes and financial provisions for children',
    ],
  },
]

export const metadata = pageMetadata(
  'Estate Planning & Islamic Wills and Trusts',
  'Wills, trusts, powers of attorney, medical directives, guardianship, and Islamic estate planning from Haq Law Firm, serving individuals and families in Maryland.',
  '/estate-planning',
)

export default function EstatePlanning() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <FadeIn>
            <p className="font-display text-base font-semibold text-burgundy-900">
              Practice Areas
            </p>
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-balance text-burgundy-900 sm:text-6xl">
              Estate Planning
            </h1>
            <p className="mt-6 max-w-xl text-xl text-warm-600">
              A good estate plan isn&apos;t just paperwork — it&apos;s peace of
              mind for you and clarity for the people you love. I help
              individuals and families across Maryland create wills, trusts, and
              directives that reflect their wishes — including Muslim clients
              who want an estate plan structured around Islamic inheritance
              principles.
            </p>
            <Button href="/contact" className="mt-10">
              Schedule a Consultation
            </Button>
          </FadeIn>
          <FadeIn className="w-full max-w-md justify-self-center lg:justify-self-end">
            <Image
              src={imageGenerations}
              alt="An adult child resting a reassuring hand on an older parent's hand as they review estate planning documents"
              className="h-auto w-full rounded-3xl"
              sizes="(min-width: 1120px) 448px, (min-width: 1024px) 40vw, (min-width: 496px) 448px, calc(100vw - 48px)"
              placeholder="blur"
              priority
            />
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-12">
        <nav
          aria-label="Estate planning sections"
          className="rounded-2xl border border-burgundy-900/10 bg-white/60 p-6"
        >
          <p className="text-sm font-semibold text-burgundy-900">
            Explore your estate plan
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {[
              ...planningServices,
              {
                id: 'islamic-estate-planning',
                title: 'Islamic Estate Planning',
              },
            ].map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className="inline-flex rounded-full bg-gold-100 px-4 py-2 text-sm font-medium text-burgundy-900 transition hover:bg-gold-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy-600"
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="mt-16 sm:mt-24">
        <div className="divide-y divide-burgundy-900/10">
          {planningServices.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              aria-labelledby={`${service.id}-title`}
              className="scroll-mt-10 py-10 first:pt-0 sm:py-14"
            >
              <FadeIn className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
                <div>
                  <p
                    aria-hidden="true"
                    className="text-sm font-semibold text-gold-700"
                  >
                    0{index + 1}
                  </p>
                  <h2
                    id={`${service.id}-title`}
                    className="mt-3 font-display text-3xl font-medium tracking-tight text-burgundy-900"
                  >
                    {service.title}
                  </h2>
                </div>
                <div>
                  <p className="text-lg text-warm-700">{service.description}</p>
                  <ul className="mt-6 list-disc space-y-2 pl-5 text-base text-warm-700 marker:text-burgundy-600">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </section>
          ))}
        </div>
      </Container>

      <section
        id="islamic-estate-planning"
        aria-labelledby="islamic-title"
        className="mt-12 scroll-mt-10 rounded-4xl bg-burgundy-900 py-16 sm:py-24"
      >
        <Container>
          <FadeIn className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold text-gold-200">
                Planning that reflects your faith
              </p>
              <h2
                id="islamic-title"
                className="mt-4 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl"
              >
                Islamic Estate Planning
              </h2>
              <Image
                src={imageOliveTree}
                alt="Watercolor illustration of an olive tree with spreading branches and roots"
                className="mt-8 h-auto w-full max-w-sm rounded-3xl"
                sizes="(min-width: 1280px) 384px, (min-width: 1024px) 30vw, (min-width: 448px) 384px, calc(100vw - 48px)"
                placeholder="blur"
              />
            </div>
            <div className="text-base text-burgundy-100">
              <p className="text-lg">
                Islamic inheritance law (Fara&apos;id) sets out faith-based
                principles for distributing a Muslim&apos;s estate. Without a
                valid estate plan, Maryland intestacy law determines how your
                probate estate passes to your heirs. I help Muslim individuals
                and families create wills and trusts that honor their faith and
                meet Maryland&apos;s legal requirements.
              </p>
              <h3 className="mt-8 font-display text-xl font-semibold text-white">
                What I help with
              </h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 marker:text-gold-200">
                <li>
                  Drafting a Wasiyyah (Islamic will) that meets Maryland law
                </li>
                <li>
                  Structuring trusts to reflect Fara&apos;id inheritance shares
                </li>
                <li>
                  Coordinating bequests for charity or non-heirs, including the
                  permissible one-third share as advised by your religious
                  advisor
                </li>
                <li>
                  Explaining how Islamic inheritance wishes interact with
                  Maryland law
                </li>
                <li>
                  Updating existing wills and trusts to reflect your Islamic
                  inheritance wishes
                </li>
              </ul>
              <p className="mt-8 rounded-2xl bg-burgundy-950/40 p-6 text-sm text-burgundy-100">
                My role is legal drafting and compliance with Maryland law.
                Please consult your own religious advisor about matters of fiqh,
                including the inheritance shares and bequests appropriate to
                your circumstances. We can use that guidance when preparing your
                plan.
              </p>
              <Button href="/contact" invert className="mt-8">
                Schedule a Consultation
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
      <ContactSection />
    </RootLayout>
  )
}
