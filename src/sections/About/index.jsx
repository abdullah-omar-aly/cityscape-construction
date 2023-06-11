"use client"

import React from "react";
import { motion   } from "framer-motion";


const ContainerVariants = {
    hidden: { },
    visible: {  },
  }
const headingVariants = {
    hidden: { opacity: 0 , x: -400},
    visible: { opacity: 1 , x:0 , transition: { duration: 1.5 , ease: "easeOut"} },
}
const P1Variants = {
    hidden: { opacity: 0 , x: -400},
    visible: { opacity: 1 , x:0 , transition: { duration: 1.5 ,delay: 0.2, ease: "easeOut"} },
}
const P2Variants = {
    hidden: { opacity: 0 , x: -400},
    visible: { opacity: 1 , x:0 , transition: { duration: 1.5 , delay: 0.4 , ease: "easeOut"} },
}

const About = () => {    



    return (
        <section className="primary-section bg-slate-100 pb-16 lg:pb-0 overflow-hidden">
            <section className="flex flex-row flex-wrap  lg:items-center lg:justify-center container max-w-screen-xl">
                <div  className="lg:w-3/5 py-16">
                <motion.div 
                    whileInView="visible"
                    initial="hidden"
                    variants={ContainerVariants}
                    viewport={{once: true}}
                    >
                    <h2 
                        className="uppercase text-main-primary font-medium pb-4 text-xl text-center lg:text-start"
                         style={{ letterSpacing: '7px' }}
                         >about us</h2>
                    <motion.h3 
                        className="text-3xl font-bold pb-7 text-center lg:text-start"
                        variants={headingVariants}

                        >We Turn Ideas Into Reality</motion.h3>
                    <motion.p
                        className="text-lg  pb-6"
                        variants={P1Variants}

                     >
                        We apply innovative design solutions to enhance people’s residential
                        well-being and to help workplaces succeed &amp; achieve more in the
                        comfortable environments!
                    </motion.p>
                    <motion.p 
                        className="text-slate-600"
                        variants={P2Variants}
                        >
                        All our team collaborates with our clients, across all of our 3
                        offices, which are located throughout the US. Our mission is to
                        implement the outstanding design ideas and solutions for any project
                        we’re working on. During that process, we carefully combine client’s
                        guidelines, technical possibilities as well as the environmental
                        issues. Engineering and interior design solutions that we deliver
                        are usually born after a collaborative process.
                    </motion.p>
                </motion.div>
                </div>
                <div className="lg:w-2/5 bg-white container max-w-screen-xl rounded-full p-20">

                    <div className="-mt-16 flex flex-col items-center justify-center">
                        <h2
                            className="stroke-heading font-black font-serif -mb-5"
                        >25

                            {/* <style jsx="true">{`
                                 h2.stroke-heading {
                                    background-image :url('../images/main-slider-3.jpg'); 
                                    font-size:200px;
                                    background-clip: text;
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                        }
                            `}</style> */}
                        </h2>
                        <div className="uppercase">
                            <p className="text-main-primary font-extrabold text-4xl mb-4 text-center">years </p>
                            <p className="text-lg  tracking-widest text-center">of successful work in the market</p>
                        </div>

                    </div>
                </div>
            </section>

        </section>
    );
};

export default About;
