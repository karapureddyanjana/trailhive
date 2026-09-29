import { navLinks } from '../data/content'
import { Button, Container, Logo } from './ui'

export default function Navbar() {
  return (
    <header className="relative z-20 rounded-b-[40px] bg-mint text-ink">
      <Container className="flex h-[72px] items-center justify-between">
        <Logo dark />
        <nav className="hidden items-center gap-[58px] text-[16px] lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:opacity-70">
              {link.label}
            </a>
          ))}
          <Button variant="outline-dark" href="#" className="ml-[-13px] h-[42px] px-5">
            Contact us
          </Button>
          <Button variant="dark" href="#" className="ml-[-27px]">
            Download the app
          </Button>
        </nav>
      </Container>
    </header>
  )
}
