import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-lavender">
            <div className="flex items-center flex-shrink-0 text-steel mr-6">
                <svg id="svg" width="60" height="40" viewBox="38 3.5 20 25">
                    <path
                        fill="none"
                        stroke="red"
                        strokeWidth="3"
                        d="M 50,5
           A 11 11 180 0 0 50,27"
                    />
                    <path
                        fill="none"
                        stroke="black"
                        strokeWidth="3"
                        opacity="0.5"
                        d="
           M 50,5 h -11 v 23.5 v -12.25 h 8
           "
                    />
                </svg>
                <a href="/" className="font-semibold text-xl tracking-tight">Chronicle Forge</a>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-steel hover:text-black mr-4">
                        Home
                    </a>
                    <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-steel hover:text-black mr-4">
                        About Me
                    </a>
                    <a href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-steel hover:text-black mr-4">
                        Services
                    </a>
                    <a href="/portfolio" className="block mt-4 lg:inline-block lg:mt-0 text-steel hover:text-black mr-4">
                        Portfolio
                    </a>
                    <a href="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-steel hover:text-black mr-4">
                        Blog
                    </a>
                </div>
                <div>
                    <a href="/resources" className="inline-block text-sm px-4 py-2 leading-none border rounded text-steel border-steel">
                        Downloads
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar