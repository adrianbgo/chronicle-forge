"use client";
import { testimonials } from '@/data/testimonials';
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonials: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [])
    return (
        <div className="container">
            <div className="max-w-4xl mx-auto p-4 w-auto">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark my-4 text-center">Testimonials</h2>
                <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    selectedItem={currentSlide}
                    autoPlay={false}
                    infiniteLoop={true}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                            <p className="text-lg font-semibold">{testimonial.quote}</p>
                            <p className="mt-2">{`- ${testimonial.name}`}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials