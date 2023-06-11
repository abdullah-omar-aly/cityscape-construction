"use client"

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import About from '@/sections/About'
import ContactUs from '@/sections/ContactUs'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import OurClients from '@/sections/OurClients'
import OurTeam from '@/sections/OurTeam'
import ProjectGallery from '@/sections/Projects'
import Services from '@/sections/Services'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isSidebarVisible , setIsSidebarVisible] = useState(false)
  const showSidebar = () =>  setIsSidebarVisible(true)
  const hideSidebar = () =>  setIsSidebarVisible(false)
  useEffect(() => {
    console.log(isSidebarVisible)
  } , [isSidebarVisible])
  return (
    <div>
      <Navbar isSidebarVisible={isSidebarVisible} showSidebar={showSidebar} hideSidebar={hideSidebar}/>
      <Sidebar isSidebarVisible={isSidebarVisible}/>
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
      <Footer />

    </div>
  )
}
