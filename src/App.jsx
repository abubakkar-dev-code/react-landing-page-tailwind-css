import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import CompanyLogo from './Components/CompanyLogo'
import Purpose from './Components/Purpose'
import FeatureSection from './Components/FeatureSection'
import SheduleSection from './Components/SheduleSection'
import MonitorSection from './Components/MonitorSection'
import Pricing from './Components/Pricing'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'
import NewsLetter from './Components/NewsLetter'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className="absolute -top-28 left-28 w-125 h-125 bg-linear-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div>
        <Navbar />
        <Hero />
        <CompanyLogo />
        <Purpose />
        <FeatureSection />
        <SheduleSection />
        <MonitorSection />
        <Pricing />
        <Services />
        <Testimonial />
        <NewsLetter />
        <Footer/>
      </div>
    </main>
  )
}

export default App