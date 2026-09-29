// Data layer — plain content, no JSX. UI components consume this.

export interface NavLink {
  label: string
  href: string
}

export interface Feature {
  title: string
  text: string
  image: string
  alt: string
  fallback: string
}

export interface Testimonial {
  quote: string
  author: string
}

export interface FooterGroup {
  heading: string
  links: NavLink[]
}

export const navLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'About us', href: '#' },
]

export const hero = {
  title: 'Your Ultimate Outdoor Companion',
  text: 'Are you tired of spending hours searching for the perfect hiking or biking trail? TrailHive - the ultimate outdoor adventure app that connects you with the best trails in your area.',
  cta: 'Download the app',
  image: '/hero.png',
  alt: 'Hiker overlooking a mountain lake',
  fallback:
    'linear-gradient(180deg,#9fc3e6 0%,#c9dcec 22%,#7f9a6a 45%,#5c8fb0 60%,#3f6f95 78%,#27313a 100%)',
}

export const featuresIntro = {
  eyebrow: 'Features',
  title: 'Stay Active and Healthy',
  cta: 'Learn more',
}

export const features: Feature[] = [
  {
    title: 'Access nature',
    text: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
    image: '/feature1.png',
    alt: 'Hiker at sunset',
    fallback:
      'linear-gradient(180deg,#1f9bc9 0%,#8fc7dc 35%,#f0b7a4 62%,#6a5a66 82%,#3b3a3d 100%)',
  },
  {
    title: 'Access nature',
    text: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
    image: '/feature2.png',
    alt: 'Hiker in golden light',
    fallback:
      'radial-gradient(circle at 50% 12%,#fff6d8 0%,#d9c48a 12%,transparent 35%),linear-gradient(180deg,#9a8a68 0%,#5d5a3e 45%,#3b4a26 100%)',
  },
  {
    title: 'Access nature',
    text: "With TrailHive, you'll have access to a comprehensive database of trails, complete with detailed information on ratings, difficulty levels, and user reviews.",
    image: '/feature3.png',
    alt: 'Backpacks resting on rocks',
    fallback:
      'linear-gradient(180deg,#4a3a2a 0%,#5b6a52 30%,#7c8378 60%,#4a5048 100%)',
  },
]

export const testimonialOne: Testimonial = {
  quote:
    '"TrailHive has completely changed the way I explore the outdoors. The personalized trail recommendations and virtual challenges have kept me motivated and engaged with my adventures."',
  author: '- John R.',
}

export const testimonialTwo: Testimonial = {
  quote:
    '"I love the social networking aspect of TrailHive. It\'s great to connect with other hikers and bikers and plan group events together."',
  author: '- Sara L.',
}

export const testimonialTwoBg = '/testimonial_bg.png'

export const trustedText = {
  lead: 'Trusted by teams at over',
  highlight: '1,000',
  rest: "of the world's leading organizations",
}

export const logos: string[] = [
  'D∕LL',
  'zendesk',
  'Rakuten',
  'Pacific Funds',
  'NCR',
  'Lattice',
  'TED',
]

export const explore = {
  title: 'Find new trails to explore and adventures to embark on.',
  image: '/adventure.png',
  alt: 'Two hikers walking toward snow-capped mountains',
  fallback:
    'linear-gradient(180deg,#b9cbe0 0%,#e8eef4 18%,#8a9498 30%,#6b7d55 55%,#4f6a3b 75%,#3a4b2a 100%)',
}

export const footerGroups: FooterGroup[] = [
  {
    heading: 'App',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Benefits', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Explore', href: '#' },
      { label: 'Trails', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Jobs', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Members', href: '#' },
    ],
  },
]

export const footerLegal: NavLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookies Settings', href: '#' },
]
