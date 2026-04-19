import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export function GridList({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <FadeInStagger>
      <ul
        role="list"
        className={clsx(
          'grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3',
          className,
        )}
      >
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function GridListItem({
  title,
  children,
  className,
  invert = false,
}: {
  title: string
  children: React.ReactNode
  className?: string
  invert?: boolean
}) {
  return (
    <li
      className={clsx(
        'text-base',
        invert
          ? 'text-warm-300 before:bg-white after:bg-white/10'
          : 'text-warm-600 before:bg-burgundy-600 after:bg-warm-200',
        className,
      )}
    >
      <FadeIn>
        <Border position="left" className="pl-8" invert={invert}>
          <strong
            className={clsx(
              'font-semibold',
              invert ? 'text-white' : 'text-burgundy-900',
            )}
          >
            {title}.
          </strong>{' '}
          {children}
        </Border>
      </FadeIn>
    </li>
  )
}
