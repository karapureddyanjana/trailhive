import type { Testimonial } from '../data/content'
import { logos, testimonialOne, testimonialTwo, testimonialTwoBg, trustedText } from '../data/content'
import { Button, Container } from './ui'

function Quote({ data }: { data: Testimonial }) {
  return (
    <>
      <p className="pt-8 text-[14px] uppercase tracking-[0.06em]">Testimonial</p>
      <blockquote className="mt-8 max-w-[1010px] text-[34px] font-normal leading-[1.1] tracking-[-0.01em] text-mint md:text-[48px]">
        {data.quote}
      </blockquote>
      <p className="mt-6 text-[20px]">{data.author}</p>
    </>
  )
}

function TopoLines() {
  const paths = [
    'M-20 120C200 60 320 190 520 130S860 40 1040 120 1340 90 1480 160',
    'M-20 170C220 110 330 240 530 180S870 90 1050 170 1350 140 1480 210',
    'M-20 240C240 180 340 310 540 250S880 160 1060 240 1360 210 1480 280',
    'M-20 330C250 270 360 400 560 340S900 250 1080 330 1370 300 1480 370',
    'M-20 430C260 370 380 500 580 440S920 350 1100 430 1380 400 1480 470',
    'M-20 540C270 480 400 610 600 550S940 460 1120 540 1390 510 1480 580',
    'M-20 650C280 590 420 720 620 660S960 570 1140 650 1400 620 1480 690',
    'M700 300C760 240 900 250 950 320S930 450 830 470 650 400 700 300Z',
    'M740 320C790 275 890 285 925 335S905 425 835 440 700 395 740 320Z',
  ]
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="#d9efde"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}

export function TestimonialOne() {
  return (
    <section className="relative -mt-10 overflow-hidden pt-10">
      <TopoLines />
      <Container className="relative pb-[52px] pt-[38px]">
        <Quote data={testimonialOne} />
        <p className="mt-[110px] text-center text-[20px] font-light text-mint/85">
          {trustedText.lead}{' '}
          <span className="font-bold text-mint">{trustedText.highlight}</span>{' '}
          {trustedText.rest}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pb-2 text-mint/60">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-[22px] font-bold"
            >
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function TestimonialTwo() {
  return (
    <section className="relative -mt-10 overflow-hidden pt-10">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg,#2b3a32 0%,#33443a 55%,#3a4a40 100%)',
        }}
      >
        <img
          src={testimonialTwoBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={(e) => e.currentTarget.remove()}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-ink/60" />
      </div>
      <Container className="relative pb-[68px] pt-[38px]">
        <p className="pt-8 text-[14px] uppercase tracking-[0.06em]">Testimonial</p>
        <blockquote className="mt-8 max-w-[810px] text-[34px] font-normal leading-[1.1] tracking-[-0.01em] text-mint md:text-[48px]">
          {testimonialTwo.quote}
        </blockquote>
        <p className="mt-6 text-[20px]">{testimonialTwo.author}</p>
        <Button variant="light" href="#" className="mt-6 h-10 px-5 text-[14px]">
          Learn More
        </Button>
      </Container>
    </section>
  )
}
