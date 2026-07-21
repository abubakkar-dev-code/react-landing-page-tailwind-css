import React from 'react'
import HeroImg from '../assets/hero-image.png'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
const Hero = () => {
    return (
        <section id='home' className='container flex flex-col md:flex-row justify-between items-center mx-auto pt-28 pb-6 px-4 sm:px-6 lg:px-8'>
            <div className='w-full md:w-1/2 space-y-8'>
                <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 cursor-pointer hover:bg-gray-100 transition:colors group rounded-full'>
                        <span className='text-blue-600  group-hover:scale-110 transition-transform hover:text-yellow-500'>★</span>
                        <span className='text-sm font-medium'>Jump start your growth</span>
                    </div>
                </motion.div>
                <motion.h1 variants={textVariant(0.3)} initial="hidden" whileInView="show" viewport={{ once: true }} className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>We boost the growth for <span className='text-blue-600 relative inline-block'>startup to Fortune 500<span className='absolute bottom-0 w-full h-0.5 left-0 bg-blue-100 opacity-60'></span> </span>companies<span className='inline-block ml-2 animate-pulse '>⏰</span></motion.h1>
                <motion.p variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show" viewport={{ once: true }} className='text-gray-600 text-large md:text-xl max-w-xl'>get the most leads sales people training and,conversions,tools and more-all within same on billing</motion.p>

                <div className='flex gap-3 max-w-md'>
                    <input className='flex-1 px-6 py-4 shadow-md  rounded-xl outline:none focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all' type='email' placeholder='Email address' />
                    <button className='bg-blue-600 px-6 py-4 text-white hover:bg-blue-700 rounded-xl cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300'>→</button>
                </div>
            </div>
            <motion.div variants={fadeIn("left", 0.5)} initial="hidden" whileInView="show" viewport={{ once: true }} className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
                <div className='relative'>
                    <img src={HeroImg} alt='hero.img' className='rounded-lg hover:scale-[1.02] transition-transform duration-300' />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero