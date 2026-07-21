import React from 'react'

const FeatureSection = () => {
    const features = [
        {
            icon: "🔍",
            title: "Find out what you need",
            description: "We present you a proposal and discuss nitty-gritty like"
        },
        {
            icon: "⚙️",
            title: "Work out the details",
            description: "Communication protocols apart from engagement models"
        },
        {
            icon: "🚀",
            title: "We get to work fast",
            description: "Protocols apart from engage models, pricing billing"
        }
    ]
    return (
        <section id='about' className='max-w-7xl mx-auto py-14 px-20'>

            <div className='text-center'>
                <h2 className='text-xl md:text-3xl text-gray-900 font-bold'>How can we help your business?</h2>
                <p className='text-gray-600 mt-2'>When you resell besnik,you build trust and increase</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                {features.map((item, index) => (
                    <div key={index} className='mt-4 flex flex-col items-center justify-center p-6'>
                        <div className='w-24 h-24 rounded-full mb-6 flex justify-center items-center' style={{ backgroundColor: index === 0 ? "#F1EFFF" : index === 1 ? "#FEE7E7" : "#FFF3E4" }}>
                            <div className='text-3xl'>{item.icon}</div>
                        </div>
                        <h3 className='text-2xl font-medium'>{item.title}</h3>
                        <p className='text-sm text-gray-600 text-center'>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className='text-center mt-10'>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 transition-colors font-medium hover:shadow-blue-400 relative'>Become a partner</button>
                <div className='absolute -z-10 left-0 w-fll h-full rounded-full bg-blue-600/30 blur-xl  top-0'></div>
            </div>


        </section>
    )
}

export default FeatureSection