import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-warm-300' : 'text-warm-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-burgundy-900'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Haq Law Firm" invert={invert}>
          1601 Connecticut Ave NW, Suite 700
          <br />
          Washington, DC 20009
        </Office>
      </li>
    </ul>
  )
}
