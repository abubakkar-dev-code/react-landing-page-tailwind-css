import React from 'react'
import sheduleImg from '../assets/stats.webp'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const SheduleSection = () => {
  return (
    <section className='max-w-7xl py-16 md:py-24 px-4 mx-auto'>
      <div className='flex flex-col md:flex-row gap-12 md:gap-24 justify-between items-center'>
        <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className='w-full md:w-1/2'>
          <img src={sheduleImg} />
        </motion.div>
        <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className='w-full md:w-1/2'>
          <p className='font-semibold text-orange-500'>SHEDULE</p>
          <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Streamline Your Business<br />With Smart Scheduling Solutions</h2>
          <p className='text-gray-600 mb-8'>Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.</p>
          <a href='#' className='flex items-center text-blue-500 font-semibold gap-2 hover:gap-4 transition-all'>Explore scheduling features<FaArrowRight className='size-5' /></a>
        </motion.div>
      </div>
    </section>
  )
}

export default SheduleSection