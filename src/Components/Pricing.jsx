import React, { useState } from 'react'

const Pricing = () => {
    const [productCount, setProductCount] = useState(1);
    const starterPrice = Math.round(4000 * (productCount / 50));
    const businessPrice = Math.round(7500 * (productCount / 50));
    return (
        <section className='px-4 py-12 mx-auto max-w-6xl'>
            <div>
                <h2 className='text-center font-bold text-2xl mb-16'>Pricing</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                    <div className='bg-white rounded-lg shadow-lg p-8'>
                        <h3 className='text-gray-500'>Starter</h3>
                        <p className='text-xl font-bold'>${starterPrice}/m</p>
                    </div>
                    <div className='bg-white rounded-lg shadow-lg p-8'>
                        <h3 className='text-gray-500'>Business</h3>
                        <p className='text-xl font-bold'>${businessPrice}/m</p>
                    </div>
                </div>
                <div className='max-w-xl mx-auto'>
                    <p className='text-gray-500 text-center'>1{productCount}product counts</p>
                    <div className='relative px-4 py-6'>
                        <div className='flex items-center gap-2'>
                            <span className='text-xs md:text-sm text-gray-500'>{productCount}</span>
                            <input onChange={(e) => setProductCount(e.target.value)} type='range' min="1" max="50" className='flex-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer' />
                            <span>50</span>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='text-center text-gray-500 mb-6'>Ready to get Started?</p>
                        <button className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg'>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing