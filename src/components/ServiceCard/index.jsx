"use client"

import React  from 'react'
import {   motion } from 'framer-motion'

const serviceCardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 , transition: { duration: 1.5 } },
}


const ServiceCard = ({heading , text , icon}) => {
    return(
        <motion.div 
            className='group md:w-1/2 p-10 lg:p-20  hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center lg:block'
            variants={serviceCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            >
            <span className="text-2xl">
                {icon}
            </span>
            <h2 className='capitalize font-bold text-xl pt-1 pb-3 transition-colors duration-300 text-main-primary lg:text-inherit lg:group-hover:text-main-primary'>{heading}</h2>
            <p className='text-slate-600 text-lg'>{text}</p>
        </motion.div>
    )
}

export default ServiceCard