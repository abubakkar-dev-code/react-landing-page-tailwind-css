import React, { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState('#home');
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#testimonials", label: "Testimonials" }
    ]
    return (
        <motion.nav variants={fadeIn("down", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }}
            className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm'>
            <div className='w-full container mx-auto flex  items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16 '>
                <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView="show" viewport={{ once: true }} className='flex items-center cursor-pointer gap-1'>
                    <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                    <div className='w-4 h-4 -ml-2 bg-red-400 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
                </motion.div>
                <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}> {
                    isMenuOpen ? <HiX className='size-6' /> : <HiMenu className='size-6' />
                }</button>
                <div className='hidden md:flex items-center gap-10'>{
                    navLinks.map((link, index) => (
                        <a onClick={() => setIsActive(link.href)} key={index} href={link.href} className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${isActive === link.href ? "text-blue-600 after:w-full" : "text-gray-600 hover:text-gray-900"}`}>{link.label}</a>
                    ))
                }</div>
                <motion.div variants={fadeIn("left", 0)} initial="hidden" whileInView="show" viewport={{ once: true }} className='hidden md:block px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-200'>
                    <a href='#newsLetter'>Get in touch</a>
                </motion.div>
            </div>

            {isMenuOpen && (
                <div className='md:hidden bg-white border-gray-200 border-t py-4'>
                    <div className='container mx-auto px-4  space-y-3'>
                        {navLinks.map((link, index) => (
                            <a key={index} onClick={() => {
                                setIsActive(link.href)
                                setIsMenuOpen(false)
                            }} className={`block text-sm font-medium py-2 ${isActive === link.href ? "text-blue-600" : "text-gray-600"}`} href={link.href} >{link.label}</a>
                        ))}
                    </div>
                </div>
            )}
        </motion.nav>
    )
}

export default Navbar