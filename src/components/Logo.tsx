import clsx from 'clsx'

export function Logomark({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
}) {
  return (
    <div
      className={clsx(
        'font-display text-2xl font-bold tracking-tight',
        invert ? 'text-white' : 'text-burgundy-900',
      )}
      {...props}
    >
      <span className={invert ? 'text-white' : 'text-burgundy-600'}>H</span>
    </div>
  )
}

export function Logo({
  className,
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx(
        'font-display text-xl font-bold tracking-tight sm:text-2xl',
        className,
      )}
      {...props}
    >
      <span className={invert ? 'text-white' : 'text-burgundy-600'}>HAQ</span>
      <span className={invert ? 'text-gold-400' : 'text-gold-700'}> LAW</span>
    </div>
  )
}
