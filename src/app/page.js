import About from '@/sections/About'
import Hero from '@/sections/Hero'
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
      
      </div>
  )
}
