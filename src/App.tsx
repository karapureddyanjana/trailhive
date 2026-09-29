import Explore from './components/Explore'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { TestimonialOne, TestimonialTwo } from './components/Testimonials'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TestimonialOne />
        <Explore />
        <TestimonialTwo />
      </main>
      <Footer />
    </>
  )
}
