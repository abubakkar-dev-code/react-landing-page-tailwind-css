import React from 'react'
import MonitorImg from '../assets/monitor-card.webp'
import { FaArrowRight } from "react-icons/fa";

const MonitorSection = () => {
    return (
        <section className='max-w-7xl px-4 mx-auto py-4'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-12  md:gap-24'>
                <div className='w-full md:w-1/2'>
                    <p className='text-green-500 font-semibold mb-4'>MONITOR</p>
                    <h2 className='text-3xl md:text-4xl text-neutral-900 font-bold mb-8'>Introducing the best<br />mobile carousels</h2>
                    <p className='text-gray-500 w-md mb-6'>Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
                    <a href='#' className='inline-flex items-center gap-2 hover:gap-4 transition-all text-blue-600 font-semibold '>Learn more about monitoring<FaArrowRight size='16' className='mt-1'/></a>
                </div>
                <div className='w-full md:w-1/2'><img src={MonitorImg} /></div>
            </div>
        </section>
    )
}

export default MonitorSection