import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainCity } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Services = () => {
    return (
        <section className="container mt-12">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">Services I Offer</h2>
                <h3 className="text-base text-body-color">There are a wide variety of services I can offer the average player</h3>
            </div>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                        <div className="w-[70px] h-[70px] flex items-center justify-center bg-lavender rounded-2xl mb-8">
                            <FontAwesomeIcon icon={faMountainCity} size='xl' />
                        </div>
                        <h4 className="font-semibold text-xl text-dark mb-3">
                            Epic Campaigns
                        </h4>
                        <p className="text-body-color">
                            Craft and lead long-term, immersive campaigns that allow players to develop intricate characters, explore vast worlds, and engage in epic storytelling.                        </p>
                        <a href="services/campaigns" className="btn inline-block mt-6 text-base font-semibold">Learn More</a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                        <div className="w-[70px] h-[70px] flex items-center justify-center bg-lavender rounded-2xl mb-8">
                            <FontAwesomeIcon icon={faMountainCity} size='xl' />
                        </div>
                        <h4 className="font-semibold text-xl text-dark mb-3">
                            One-Shot Adventures
                        </h4>
                        <p className="text-body-color">
                            Provide self-contained, single-session adventures for players looking to experience a complete story in a shorter timeframe.                        </p>
                        <a href="services/oneshots" className="btn inline-block mt-6 text-base font-semibold">Learn More</a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                        <div className="w-[70px] h-[70px] flex items-center justify-center bg-lavender rounded-2xl mb-8">
                            <FontAwesomeIcon icon={faMountainCity} size='xl' />
                        </div>
                        <h4 className="font-semibold text-xl text-dark mb-3">
                            Beginner's Introductions
                        </h4>
                        <p className="text-body-color">
                            Offer introductory sessions for newcomers, guiding them through the basics of tabletop roleplaying and helping them create memorable first experiences.                        </p>
                        <a href="services/beginner" className="btn inline-block mt-6 text-base font-semibold">Learn More</a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                        <div className="w-[70px] h-[70px] flex items-center justify-center bg-lavender rounded-2xl mb-8">
                            <FontAwesomeIcon icon={faMountainCity} size='xl' />
                        </div>
                        <h4 className="font-semibold text-xl text-dark mb-3">
                            Pre-Made Modules
                        </h4>
                        <p className="text-body-color">
                            Run established modules with well-developed plots, settings, and challenges for players seeking a guided adventure.                        </p>
                        <a href="services/premade" className="btn inline-block mt-6 text-base font-semibold">Learn More</a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                        <div className="w-[70px] h-[70px] flex items-center justify-center bg-lavender rounded-2xl mb-8">
                            <FontAwesomeIcon icon={faMountainCity} size='xl' />
                        </div>
                        <h4 className="font-semibold text-xl text-dark mb-3">
                            Custom Campaign Creation
                        </h4>
                        <p className="text-body-color">
                            Design tailor-made campaigns to suit your clients' preferences, incorporating their ideas, themes, and preferences.                        </p>
                        <a href="services/custom" className="btn inline-block mt-6 text-base font-semibold">Learn More</a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                        <div className="w-[70px] h-[70px] flex items-center justify-center bg-lavender rounded-2xl mb-8">
                            <FontAwesomeIcon icon={faMountainCity} size='xl' />
                        </div>
                        <h4 className="font-semibold text-xl text-dark mb-3">
                            Character Development Sessions
                        </h4>
                        <p className="text-body-color">
                            Focus on character-driven sessions, allowing players to delve deep into their characters' motivations, backgrounds, and growth.                        </p>
                        <a href="services/development" className="btn inline-block mt-6 text-base font-semibold">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services