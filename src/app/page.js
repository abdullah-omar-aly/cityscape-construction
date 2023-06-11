import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      </div>
  )
}
