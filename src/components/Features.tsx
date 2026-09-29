import type { Feature } from '../data/content'
import { features, featuresIntro } from '../data/content'
import { Button, Container, Photo } from './ui'

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article>
      <Photo
        src={feature.image}
        alt={feature.alt}
        fallback={feature.fallback}
        className="h-[311px] rounded-3xl"
      />
      <h3 className="mt-[13px] text-[18px] font-normal leading-[27px]">
        {feature.title}
      </h3>
      <p className="mt-[6px] text-[14px] leading-[22px]">{feature.text}</p>
    </article>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative z-10 rounded-[40px] bg-mint text-ink">
      <Container className="grid gap-10 pb-[65px] pt-[64px] lg:grid-cols-[240px_1fr] lg:gap-[80px]">
        <div>
          <p className="text-[16px] uppercase leading-[19px]">
            {featuresIntro.eyebrow}
          </p>
          <h2 className="mt-[27px] text-[38px] font-normal leading-[45px]">
            Stay Active
            <br />
            and Healthy
          </h2>
          <Button variant="dark" href="#" className="mt-6 h-[39px] px-[23px] text-[15px]">
            {featuresIntro.cta}
          </Button>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 lg:gap-[80px]">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} />
          ))}
        </div>
      </Container>
    </section>
  )
}
