import React from 'react'
import amazon from '../assets/amazon.png'
import Slack from '../assets/slack.png'
import woocomerce from '../assets/woocommerce.png'
import maundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'
const CompanyLogo = () => {
    const logos = [amazon, Slack, woocomerce, maundies, sitepoint]
    return (
        <div className='w-full overflow-hidden container mx-auto py-20 flex flex-col gap-12 sm:flex-row sm:items-center items-start'>
            <div className='w-75 shrink-0 text-gray-600 border-l-4 border-blue-600  px-6 bg-white z-10 sm:text-base text-xl font-semibold text-left'>Proud partner at <br />Hbufplot & segment</div>
            <div className='flex whitespace-nowrap animate-marquee'>
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt='company logo' className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
                ))}
                {logos.map((logo, index) => (
                    <img key={`duplicate-${index}`} src={logo} alt='company logo' className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
                ))}
            </div>
        </div>
    )
}

export default CompanyLogo