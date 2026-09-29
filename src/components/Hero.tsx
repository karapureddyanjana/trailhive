import { hero } from '../data/content'
import { Button, Container, Photo } from './ui'

export default function Hero() {
  return (
    <section className="-mt-10 pt-10">
      <Container className="grid items-start gap-10 pb-[63px] pt-[63px] lg:grid-cols-[1fr_500px]">
        <div>
          <h1 className="max-w-[560px] text-[56px] font-normal leading-[0.972] tracking-[-0.03em] text-mint md:text-[88px]">
            {hero.title}
          </h1>
          <p className="mt-[23px] max-w-[500px] text-[18px] leading-[28.8px] text-mint/95">
            {hero.text}
          </p>
          <Button variant="light" href="#" className="mt-10">
            {hero.cta}
          </Button>
        </div>
        <Photo
          src={hero.image}
          alt={hero.alt}
          fallback={hero.fallback}
          className="mt-1 h-[440px] rounded-3xl"
        />
      </Container>
    </section>
  )
}
