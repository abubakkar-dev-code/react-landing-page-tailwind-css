import React from 'react';
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const footerLinks = {
        company: [
            { name: 'About', href: '#' },
            { name: 'Terms of Use', href: '#' },
            { name: 'Privacy Policy', href: '#' },
            { name: 'How it Works', href: '#' },
            { name: 'Contact Us', href: '#' },
        ],
        getHelp: [
            { name: 'Support Carrer', href: '#' },
            { name: '24h Service', href: '#' },
            { name: 'Quick Chat', href: '#' },
        ],
        support: [
            { name: 'FAQ', href: '#' },
            { name: 'Policy', href: '#' },
            { name: 'Business', href: '#' },
        ],
        contact: [
            { name: 'WhatsApp', href: '#' },
            { name: 'Support 24', href: '#' },
        ],
    }
    return (
        <footer className='bg-gray-50'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
                    <div className='lg:col-span-4'>
                        <div className='flex gap-1 items-center mb-6'>
                            <div className='flex items-center cursor-pointer gap-1'>
                                <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                                <div className='w-4 h-4 -ml-2 bg-red-400 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                            </div>
                            <span className='text-xl font-medium ml-1'>The Next Design</span>
                        </div>
                        <p className='text-gray-500 mb-6 md:w-3/4'>The copy warned the Little Blind Text, that
                            where it came from it would have been
                            rewritten a thousand times.
                        </p>
                        <div className='flex gap-4'>
                            <a href='#' className='w-10 h-10 bg-gray-200 rounded-full flex items-center hover:bg-blue-600 hover:text-white justify-center transition-colors duration-200'><FaFacebookF /></a>
                            <a href='#' className='w-10 h-10 bg-gray-200 rounded-full flex items-center hover:bg-blue-600 hover:text-white justify-center transition-colors duration-200'><FaTwitter /></a>
                            <a href='#' className='w-10 h-10 bg-gray-200 rounded-full flex items-center hover:bg-blue-600 hover:text-white justify-center transition-colors duration-200'><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className='lg:col-span-8'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                            {Object.entries(footerLinks).map(([category, link], categoryIndex) => (
                                <div key={category}>
                                <h3 className='font-medium text-lg mb-4 uppercase'>{category}</h3>
                                <ul className='space-y-3'>
                                    {link.map((link,index)=>(
                                        <li key={index}>
                                            <a href='#' className='text-gray-600 hover:text-gray-900'>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-200 mt-12 pt-4'>
                    <div>
                        <p>Copyright  {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer