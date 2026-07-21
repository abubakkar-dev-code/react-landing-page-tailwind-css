import React from 'react'
import {BsStack} from 'react-icons/bs'
import {HiLightBulb} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
import {BiTime} from 'react-icons/bi'

const Services = () => {
    const services = [
        {
            icon: <BsStack className="w-8 h-8 text-indigo-600" />,
            title: "Web Design",
            description: "One for all and all for one, Muskehounds are always ready.",
            link: "#learn-more"
        },
        {
            icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
            title: "Ad-Creatives",
            description: "Alphabet Village and the subline of her own road.",
            link: "#learn-more"
        },
        {
            icon: <FiSettings className="w-8 h-8 text-red-400" />,
            title: "Automation",
            description: "Little Blind Text should turn around and return.",
            link: "#learn-more"
        },
        {
            icon: <BiTime className="w-8 h-8 text-cyan-400" />,
            title: "Infographics",
            description: "Nothing the copy said could convince her.",
            link: "#learn-more"
        }
    ]

    return (
        <section id="services" className=' mx-auto container px-4 sm:px-6 md:px-6 lg:px-8 py-14 max-w-7xl'>

            <div className='flex flex-col md:flex-row items-center gap-14 md:24'>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-xl md:text-4xl font-bold'>Future of support with<br /> new shape</h2>
                    <p className='text-lg text-gray-500 md:4/5'>Discuss your goals,determine success metrics,<br />identify problems</p>
                    <div className='flex items-center mt-10 gap-4'>
                        <div className='bg-indigo-100 h-5 w-5 rounded-full flex items-center justify-center'>
                            <div className='bg-blue-600 h-2 w-2 rounded-full'></div>
                        </div>
                        <span className='text-gray-500'>UX design content strategy</span>
                    </div>
                    <div className='flex items-center mt-6 gap-4'>
                        <div className='bg-indigo-100 h-5 w-5 rounded-full flex items-center justify-center'>
                            <div className='bg-blue-600 h-2 w-2 rounded-full'></div>
                        </div>
                        <span className='text-gray-500'>Development bring</span>

                    </div>
                    <div className='mt-8'>
                        <button className=' bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-white'>Get started</button>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
                        { services.map((service,index)=>(
                            <div key={index} className='max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl'>
                                <div className='mb-2'>{service.icon}</div>
                                <h2  className='mb-2'>{service.title}</h2>
                                <p className='mb-2 text-gray-500 text-sm font-semibold'>{service.description}</p>
                                <a href={service.link} className='text-blue-600 font-semibold text-sm'>LEARN MORE</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services