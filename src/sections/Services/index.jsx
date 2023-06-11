"use client";

import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import servicesData from "@/data/services";
import Image from "next/image";
const ServicesList = () => (
  <div className="flex flex-wrap">
    {servicesData.map((service, ind) => (
      <ServiceCard
        key={ind}
        heading={service.heading}
        text={service.text}
        icon={service.icon}
      />
    ))}
  </div>
);

const Services = () => {
  return (
    <section className="primary-section pt-16 overflow-hidden w-screen ">
      <section className="lg:container lg:max-w-screen-xl">
        <div>
          <h2
            className="uppercase text-main-primary font-medium pb-4 text-xl text-center lg:text-start"
            style={{ letterSpacing: "7px" }}
          >
            our services
          </h2>
          <motion.h3
            className="text-3xl font-bold pb-7 capitalize text-center lg:text-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            construction <br /> solutions
          </motion.h3>
        </div>
        <div className="flex flex-col lg:flex-row">
          <motion.div
            className="relative lg:w-1/2 h-80 lg:h-auto"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              className="absolute left-0 top-0"
              fill={true}
              src="/engineer.jpg"
              alt="Project sample"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
          <div className="lg:w-1/2 flex flex-col mx-5 lg:mx-0">
            <motion.div
              className="flex justify-center items-center px-7 py-15 "
              style={{ minHeight: "250px" }}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-slate-600 py-10">
                The first thing we do is meeting with our clients and talk
                through their goals on a future project. During this meeting,
                feel free to communicate your ideas and ask lots of questions.
                This stage is highly decisive as you can evaluate the work of
                your potential architect by browsing their portfolio.
              </p>
            </motion.div>
            <motion.div
              className="bg-main-primary flex justify-center items-center px-7 py-15"
              style={{ minHeight: "250px" }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-2xl font-bold text-white py-10">
                We focus on the problem, the question and the solution. And we
                always think ahead.
              </p>
            </motion.div>
          </div>
        </div>
        <ServicesList />
      </section>
    </section>
  );
};

export default Services;
