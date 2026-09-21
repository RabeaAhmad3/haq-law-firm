'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo } from '@/components/Logo'
import { practiceAreas } from '@/lib/practiceAreas'

function DesktopNavigation() {
  const pathname = usePathname()
  const linkClass =
    'block rounded-lg px-3 py-2 text-sm font-semibold whitespace-nowrap text-burgundy-900 transition hover:bg-burgundy-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy-600'

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-3 lg:flex"
    >
      {practiceAreas.map((area) => (
        <Link
          key={area.href}
          href={area.href}
          className={linkClass}
          aria-current={pathname === area.href ? 'page' : undefined}
        >
          {area.title}
        </Link>
      ))}
      <Link
        href="/about"
        className={linkClass}
        aria-current={pathname === '/about' ? 'page' : undefined}
      >
        About
      </Link>
      <Button
        href="/contact"
        className="ml-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy-600"
        aria-current={pathname === '/contact' ? 'page' : undefined}
      >
        Contact
      </Button>
    </nav>
  )
}

function Header({
  panelId,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement | null>
  invert?: boolean
}) {
  return (
    <Container>
      <div className="flex items-center justify-between gap-6">
        <Link href="/" aria-label="Haq Law Firm home" className="shrink-0">
          <Logo invert={invert} />
        </Link>
        {!invert && <DesktopNavigation />}
        <div className="flex items-center gap-x-6 lg:hidden">
          <Button href="/contact" invert={invert}>
            Contact
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded}
            aria-controls={panelId}
            aria-label={expanded ? 'Close navigation' : 'Open navigation'}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition focus-visible:outline-2 focus-visible:outline-offset-4',
              invert
                ? 'text-white hover:bg-white/10'
                : 'text-burgundy-900 hover:bg-burgundy-600/10',
            )}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-current"
            >
              {expanded ? (
                <>
                  <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
                  <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
                </>
              ) : (
                <path d="M2 6h20v2H2zM2 16h20v2H2z" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </Container>
  )
}

function MobileNavigation() {
  const pathname = usePathname()
  const rowClass =
    'block w-full px-6 py-8 text-left transition hover:bg-burgundy-900 focus-visible:outline-2 focus-visible:-outline-offset-4 sm:px-12'

  return (
    <nav
      aria-label="Main navigation"
      className="divide-y divide-burgundy-800 bg-burgundy-950 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl"
    >
      {practiceAreas.map((area) => (
        <Link
          key={area.href}
          href={area.href}
          className={rowClass}
          aria-current={pathname === area.href ? 'page' : undefined}
        >
          {area.title}
        </Link>
      ))}
      <Link
        href="/about"
        className={rowClass}
        aria-current={pathname === '/about' ? 'page' : undefined}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={rowClass}
        aria-current={pathname === '/contact' ? 'page' : undefined}
      >
        Contact
      </Link>
    </nav>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  const panelId = useId()
  const [expanded, setExpanded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const openRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const shouldReduceMotion = useReducedMotion()

  function closeNavigation() {
    setIsTransitioning(true)
    setExpanded(false)
    window.requestAnimationFrame(() =>
      openRef.current?.focus({ preventScroll: true }),
    )
  }

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    function onBreakpointChange() {
      if (desktop.matches) {
        setIsTransitioning(false)
        setExpanded(false)
      }
    }
    desktop.addEventListener('change', onBreakpointChange)
    return () => desktop.removeEventListener('change', onBreakpointChange)
  }, [])

  useEffect(() => {
    if (!expanded) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      event.preventDefault()
      closeNavigation()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [expanded])

  return (
    <MotionConfig
      transition={
        shouldReduceMotion || !isTransitioning ? { duration: 0 } : undefined
      }
    >
      <header>
        <div
          className="absolute inset-x-0 top-2 z-40 pt-8 sm:pt-14"
          aria-hidden={expanded || undefined}
          inert={expanded}
        >
          <Header
            panelId={panelId}
            toggleRef={openRef}
            expanded={false}
            onToggle={() => {
              setIsTransitioning(true)
              setExpanded(true)
              window.requestAnimationFrame(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>
        <div className="hidden h-2 lg:block" />
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-burgundy-950 pt-2 lg:hidden"
          aria-hidden={!expanded}
          inert={!expanded}
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest('a')) {
              setIsTransitioning(false)
              setExpanded(false)
              window.requestAnimationFrame(() =>
                openRef.current?.focus({ preventScroll: true }),
              )
            }
          }}
        >
          <motion.div layout className="bg-burgundy-900">
            <div className="bg-burgundy-950 pt-8 pb-12 sm:pt-14">
              <Header
                invert
                panelId={panelId}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={closeNavigation}
              />
            </div>
            <MobileNavigation />
            <div className="border-t border-burgundy-800 bg-burgundy-950 px-6 py-10 text-sm text-burgundy-200 sm:px-12">
              <h2 className="font-display text-base font-semibold text-white">
                Contact Us
              </h2>
              <p className="mt-6 font-semibold text-white">Haq Law Firm</p>
              <p className="mt-4">
                <a
                  href="tel:+12404902868"
                  className="transition hover:text-gold-400"
                >
                  (240) 490-2868
                </a>
              </p>
              <p className="mt-1">
                <a
                  href="mailto:maheen@haqlegal.com"
                  className="transition hover:text-gold-400"
                >
                  maheen@haqlegal.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </header>
      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-warm-50 pt-14"
        aria-hidden={expanded || undefined}
        inert={expanded}
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-warm-100 stroke-warm-600/5"
            yOffset={-96}
            interactive
          />
          <main className="w-full flex-auto">{children}</main>
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
}
