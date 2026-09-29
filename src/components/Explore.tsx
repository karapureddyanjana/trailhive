import { explore } from '../data/content'
import { Photo } from './ui'

export default function Explore() {
  return (
    <section className="relative z-10 rounded-[40px] bg-mint text-ink">
      <div className="px-5 pb-5 pt-[64px]">
        <h2 className="mx-auto max-w-[700px] text-center text-[32px] font-normal leading-[1.2] md:text-[48px]">
          {explore.title}
        </h2>
        <Photo
          src={explore.image}
          alt={explore.alt}
          fallback={explore.fallback}
          className="mt-9 h-[300px] rounded-3xl md:h-[700px]"
        />
      </div>
    </section>
  )
}
