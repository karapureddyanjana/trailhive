import { useState } from 'react'
import { footerGroups, footerLegal } from '../data/content'
import { Container, Logo } from './ui'

function Subscribe() {
  const [email, setEmail] = useState('')
  return (
    <div>
      <form
        className="flex items-center gap-[18px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="h-10 min-w-0 flex-1 border-0 border-b border-mint/80 bg-transparent px-0 text-[12px] text-mint placeholder-mint/90 focus:border-mint focus:outline-none"
        />
        <button
          type="submit"
          className="h-[46px] rounded-full border border-mint px-[26px] text-[16px] text-mint transition hover:bg-mint hover:text-ink"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-4 text-[11px] text-mint/90">
        By subscribing you agree to with our{' '}
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </p>
    </div>
  )
}

function LinkGroup({
  heading,
  links,
}: {
  heading: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h4 className="text-[16px]">{heading}</h4>
      <ul className="mt-6 space-y-[22px] text-[14px] text-mint/90">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:opacity-70">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const [app, company] = footerGroups
  return (
    <footer className="bg-ink">
      <Container className="pb-[60px] pt-[68px]">
        <div className="grid gap-10 lg:grid-cols-[230px_230px_1fr]">
          <Logo size="lg" />
          <LinkGroup heading={app.heading} links={app.links} />
          <div className="grid gap-10 sm:grid-cols-[230px_1fr]">
            <LinkGroup heading={company.heading} links={company.links} />
            <Subscribe />
          </div>
        </div>

        <hr className="mt-[105px] border-mint/70" />
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 text-[12px] text-mint/90">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span>© 2023 TrailHive. All rights reserved.</span>
            {footerLegal.map((link) => (
              <a key={link.label} href={link.href} className="underline">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5 text-mint">
            <a href="#" aria-label="Facebook" className="hover:opacity-70">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6c0-.9.2-1.3 1.5-1.3H17V1.2C16.6 1.1 15.6 1 14.5 1 12 1 10 2.5 10 5.5V8H7v4h3v11h4V12h3l.5-4Z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-70">
              <svg width="17" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 4.6c-.8.4-1.7.6-2.6.7a4.5 4.5 0 0 0 2-2.5c-.9.5-1.9.9-2.9 1.1A4.5 4.5 0 0 0 11.8 8 12.8 12.8 0 0 1 2.5 3.3a4.5 4.5 0 0 0 1.4 6 4.5 4.5 0 0 1-2-.6c0 2.2 1.5 4 3.6 4.5-.7.2-1.4.2-2 .1a4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.3 12.8 12.8 0 0 0 7.9 20.3c8.3 0 12.8-6.9 12.8-12.8v-.6c.9-.6 1.6-1.4 2.3-2.3Z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM8 19H5V9.5h3ZM6.5 8.2A1.7 1.7 0 1 1 6.5 4.8a1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5S13 13.1 13 14.3V19h-3V9.5h2.8v1.3c.4-.8 1.4-1.5 2.8-1.5 3 0 3.4 2 3.4 4.5Z" /></svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
