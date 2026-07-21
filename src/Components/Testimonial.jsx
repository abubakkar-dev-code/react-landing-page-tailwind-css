import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../App.css'
import { useRef } from "react";



const Testimonial = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: "Robin Ayala Doe",
            image: "https://randomuser.me/api/portraits/men/77.jpg",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
        },
        {
            id: 2,
            name: "John De marli",
            image: "https://randomuser.me/api/portraits/women/90.jpg",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
        },
        {
            id: 3,
            name: "Rowhan Smith",
            image: "https://randomuser.me/api/portraits/men/90.jpg",
            text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
        },
        {
            id: 4,
            name: "Sarah Johnson",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
        },
        {
            id: 5,
            name: "Michael Chen",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
        },
        {
            id: 6,
            name: "Emma Wilson",
            image: "https://randomuser.me/api/portraits/women/28.jpg",
            text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
        },

    ];
    return (
        <section id='testimonials' className='max-w-7xl mx-auto px-4 py-12'>
            <div className='text-center mb-12'>
                <h2 className='text-2xl md:text-4xl font-bold'>Whats our happy client say</h2>
                <p className='text-gray-600 mt-5'>Things that make it best place to start trading</p>
            </div>
            <div>
                <Swiper
                    navigation={
                        {
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom'
                        }
                    }
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,

                        },
                        768: {
                            slidesPerView: 2,

                        },
                        1024: {
                            slidesPerView: 3,

                        },
                    }}
                    modules={[Navigation]}
                    className="testimonial-swipper md:mb-12 mt-14"
                >{
                        testimonials.map((test, index) => (

                            <SwiperSlide key={test.id}>
                                <div className='flex flex-col text-center rounded-lg py-4 px-6 shadow-lg w-full h-full bg-white mt-16'>
                                    <div className='mx-auto w-24 h-24'>
                                        <img className='w-full h-full rounded-full object-cover' src={test.image} />
                                    </div>
                                    <div className='flex justify-center mt-6'>
                                        {[...Array(5)].map((_, startIndex) => (
                                            <span className='text-yellow-500'>★</span>
                                        ))}
                                    </div>
                                    <h3 className='text-xl font-semibold mb-3'>{test.name}</h3>
                                    <p className='text-gray-600'>{test.text}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
                <div className='  flex items-center justify-center gap-6'>
                    <div className='bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white'>
                        <button className='swiper-button-prev-custom size-4 transition-all'><BsChevronLeft /></button>
                    </div>
                    <div className='bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600  hover:text-white transition-all'>
                        <button className='swiper-button-next-custom'><BsChevronRight className='size-4 ' /></button>
                    </div></div>
            </div>
        </section>
    )
}

export default Testimonial