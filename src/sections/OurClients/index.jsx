"use client"

import React from 'react'
import { motion } from 'framer-motion'


const OurClients = () => {
  return (
    <section className='w-full bg-main-black h-fit py-32 mt-16 flex flex-col items-center justify-center overflow-hidden'>
        <div className='pb-10'>
        <h2 
        className="uppercase text-main-primary font-medium pb-4 text-xl text-center " style={{letterSpacing:'7px'}}>our clients</h2>
                <h3 className="text-4xl font-bold pb-7 text-white text-center capitalize">we work worldwide</h3>
        </div>
        <motion.img 
            src='/map-img.png'
            loading='lazy'
             alt=''
             initial={{opacity:0}}
             whileInView={{opacity: 1}}
             transition={{ease: "easeOut" , duration: 2}}
             />

  </section>
    )
}

export default OurClients