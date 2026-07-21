import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const NewsLetter = () => {
    return (
        <section id='newsletter' className=' container  mx-auto px-6 py-12 '>
            <div className=''>
                <div className='bg-blue-600 rounded-2xl overflow-hidden'>
                    <div className='relative md:px-15 py-16 px-6 md:py-24'>
                        <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant'></div>
                        <div className='relative flex flex-col md:flex-row items-center justify-between gap-8'>
                            <div>
                                <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4 text-white'>Subscribe news letter</h2>
                                <p className='text-gray-200 text-sm sm:text-base'>Best cooks and best delivery guys all at your service.Hot tasty food.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
                                />

                                <button className="w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center justify-center gap-2">
                                    <span>Discover</span>
                                    <HiArrowRight className="size-5 mt-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {
                    `.clip-path-slant{
                    clip-path:polygon(20% 0%,100% 0%,100%  100%,0% 100%)}`
                }
            </style>
        </section>
    )
}

export default NewsLetter