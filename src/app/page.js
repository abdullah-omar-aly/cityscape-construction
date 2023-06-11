import About from '@/sections/About'
import ContactUs from '@/sections/ContactUs'
import Hero from '@/sections/Hero'
import OurClients from '@/sections/OurClients'
import OurTeam from '@/sections/OurTeam'
import ProjectGallery from '@/sections/Projects'
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
      <section id="projects">
        <ProjectGallery />
      </section>
      <section id="our-team">
        <OurTeam />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
      <section id="clients">
        <OurClients />
      </section>
      </div>
  )
}
