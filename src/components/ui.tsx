import type { ReactNode } from 'react'

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto max-w-[1200px] px-6 xl:px-0 ${className}`}>
      {children}
    </div>
  )
}

type ButtonVariant = 'dark' | 'light' | 'outline-dark' | 'outline-light'

const variants: Record<ButtonVariant, string> = {
  dark: 'bg-ink text-mint hover:opacity-90',
  light: 'bg-mint text-ink hover:opacity-90',
  'outline-dark': 'border border-ink hover:bg-ink hover:text-mint',
  'outline-light': 'border border-mint hover:bg-mint hover:text-ink',
}

export function Button({
  children,
  href = '#',
  variant = 'dark',
  className = '',
}: {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
  className?: string
}) {
  return (
    <a
      href={href}
      className={`inline-flex h-[42px] items-center rounded-full px-[22px] text-[16px] transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

export function Logo({
  size = 'md',
  dark = false,
}: {
  size?: 'md' | 'lg'
  dark?: boolean
}) {
  const cls =
    size === 'lg'
      ? 'gap-1.5 text-[28px]'
      : 'gap-1 text-[21px]'
  return (
    <a
      href="#"
      className={`flex h-fit items-center font-bold tracking-tight ${dark ? 'text-ink' : 'text-mint'} ${cls}`}
    >
      <svg
        width={size === 'lg' ? 30 : 22}
        height={size === 'lg' ? 24 : 19}
        viewBox="0 0 24 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0 20 8.5 3 13 11.5 16 6.5 24 20Z" />
      </svg>
      TrailHive
    </a>
  )
}

export function Photo({
  src,
  alt,
  fallback,
  className = '',
}: {
  src: string
  alt: string
  fallback: string
  className?: string
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: fallback }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => e.currentTarget.remove()}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}
