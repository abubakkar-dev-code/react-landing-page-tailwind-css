import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const Purpose = () => {
    const features = [
        {
            icon: "🟣", // Replace with your actual icon component or image
            title: "Built for impact",
            description: "We identify and nurture a truly diverse team of designers, developers and marketers"
        },
        {
            icon: "🔴", // Replace with your actual icon component or image
            title: "In sync with you",
            description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
        }
    ];
    return (
        <section className='w-full  bg-gray-50 mx-auto py-12 px-4 sm:px-8'>
            <div className='max-w-6xl mx-auto'>
                <div className='grid md:grid-cols-3 grid-cols-1'>
                    <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <p className='text-purple-600 text-sm font-medium mb-2'>ACHEIVE MORE</p>
                        <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900'>Purpose of a Convoy is to keep your team</h2>
                    </motion.div>
                    <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className='col-span-2 grid md:grid-cols-2 justify-between gap-2 mt-8 md:mt-0'>{
                        features.map((item, index) => (
                            <div key={index} flex items-start space-x-4>
                                <div className='w-12 h-12 flex items-center justify-center rounded-lg'>{item.icon}</div>
                                <div>
                                    <h3 className='text-xl font-semibold text-gray-900'>{item.title}</h3>
                                    <p className='text-gray-600'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Purpose