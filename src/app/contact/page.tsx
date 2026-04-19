'use client'

import { useId, useState } from 'react'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-warm-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-warm-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-burgundy-900 focus:ring-burgundy-900/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-warm-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-warm-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-warm-950"
      >
        {label}
      </label>
    </div>
  )
}

function TextArea({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        placeholder=" "
        rows={4}
        className="peer block w-full border border-warm-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-warm-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-burgundy-900 focus:ring-burgundy-900/5 focus:outline-hidden resize-none"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-6 left-6 origin-left text-base/6 text-warm-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-2 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-warm-950 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-warm-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {
  let [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', '8adf3b33-5226-419c-888f-6b0bd4846fa5')
    formData.append('subject', 'New Contact Form Submission — Haq Law Firm')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-burgundy-900">
          Send a Message
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-warm-50/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextArea label="Tell us about your case" name="message" required />
        </div>
        {status === 'success' && (
          <p className="mt-4 text-sm font-semibold text-green-700">
            Thank you! Your message has been sent. We&apos;ll be in touch soon.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm font-semibold text-red-700">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
        <Button type="submit" className="mt-10" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-burgundy-900">
        Contact Information
      </h2>
      <p className="mt-6 text-base text-warm-600">
        Whether you&apos;re facing workplace harassment, discrimination, or a civil
        rights violation, I&apos;m here to help. Contact me today to schedule a
        confidential consultation.
      </p>

      <Border className="mt-10 pt-10">
        <h3 className="font-display text-base font-semibold text-burgundy-900">
          Office
        </h3>
        <address className="mt-4 text-sm not-italic text-warm-600">
          <p className="font-semibold text-warm-950">Haq Law Firm</p>
          <p>1601 Connecticut Ave NW, Suite 700</p>
          <p>Washington, DC 20009</p>
        </address>
      </Border>

      <Border className="mt-10 pt-10">
        <h3 className="font-display text-base font-semibold text-burgundy-900">
          Phone
        </h3>
        <p className="mt-4">
          <a
            href="tel:+12404902868"
            className="text-sm text-warm-600 hover:text-burgundy-900 transition"
          >
            (240) 490-2868
          </a>
        </p>
      </Border>

      <Border className="mt-10 pt-10">
        <h3 className="font-display text-base font-semibold text-burgundy-900">
          Email
        </h3>
        <p className="mt-4">
          <a
            href="mailto:maheen@haqlegal.com"
            className="text-sm text-warm-600 hover:text-burgundy-900 transition"
          >
            maheen@haqlegal.com
          </a>
        </p>
      </Border>

      <Border className="mt-10 pt-10">
        <h3 className="font-display text-base font-semibold text-burgundy-900">
          Schedule a Consultation
        </h3>
        <p className="mt-4 text-sm text-warm-600">
          Prefer to book directly?{' '}
          <a
            href="#"
            className="font-semibold text-burgundy-900 hover:text-burgundy-700 transition"
          >
            Schedule via Calendly
          </a>
        </p>
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact" title="Let's Talk About Your Case">
        <p>
          Whether you&apos;re facing workplace harassment, discrimination, or a civil
          rights violation, I&apos;m here to help.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
