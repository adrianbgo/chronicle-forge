import React from 'react'

const CTA: React.FC = () => {
    return (
        <div className="container">
            <div className="bg-gray-100 py-8">
                <div className="max-w-screen-xl mx-auto text-center px-4">
                    <h2 className="text-2xl md:text-4xl lg:text-4xl text-black font-semibold mb-2">
                        Ready to embark on an <span className="text-blue-400">unforgettable adventure?</span>
                    </h2>
                    <p className="text-black text-lg mb-4">
                        Join me in crafting stories that will leave a mark on your heart and imagination.
                    </p>
                    <div>
                        <a className="bg-blue-700 text-white hover:bg-blue-900 text-lg md:text-xl px-6 py-3 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500" href="/booking">
                            Book Now
                        </a>
                        <a className="btn-ghost text-lg md:text-xl px-6 py-3 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-500" href="/about">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CTA