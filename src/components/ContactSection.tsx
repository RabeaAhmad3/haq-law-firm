import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40" id="contact">
      <FadeIn className="-mx-6 rounded-4xl bg-burgundy-900 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Ready to Discuss Your Case?
            </h2>
            <p className="mt-4 text-lg text-burgundy-100">
              Schedule a confidential consultation to discuss your legal needs
              and learn how I can help protect your rights.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/contact" invert>
                Schedule a Consultation
              </Button>
              <Button href="tel:+12404902868" className="bg-gold-500 text-burgundy-950 hover:bg-gold-400">
                Call Now
              </Button>
            </div>
            <div className="mt-10 border-t border-burgundy-800 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Contact Information
              </h3>
              <div className="mt-6 text-sm">
                <p className="font-semibold text-gold-400">Get in Touch</p>
                <div className="mt-2 text-burgundy-200">
                  <p>
                    <a href="tel:+12404902868" className="hover:text-white transition">
                      (240) 490-2868
                    </a>
                  </p>
                  <p className="mt-1">
                    <a href="mailto:maheen@haqlegal.com" className="hover:text-white transition">
                      maheen@haqlegal.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
