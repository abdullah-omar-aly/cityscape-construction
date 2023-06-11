"use client"

import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';




const TeamMemberCard = ({ name, title, image, cardInd }) => {

    const cardVariants = {
        hidden: { x: (cardInd % 2 === 0 ? 200 : -200) },
        visible: { x: 0, transition: { duration: 1.5, ease: "easeOut" } },
    }

    return <motion.div
        className='card w-full relative md:row-span-3 h-450  md:h-full '
        variants={cardVariants}
        initial="hidden"
        whileInView='visible'
        viewport={{ once: true }}
    >
        <Image
            src={`/${image}`}
            alt="Team member"
            loading='lazy'
            fill={true}
            style={{objectFit: "cover"}}
        />
        <div className='absolute left-0 bottom-0 right-10 -mb-1 -ml-1 bg-white px-7 py-5'>
            <h3 className='text-black font-bold capitalize text-lg'>{name}</h3>
            <h4 className='text-slate-600 uppercase  tracking-widest'>{title}</h4>
        </div>
    </motion.div>
}


export default TeamMemberCard
