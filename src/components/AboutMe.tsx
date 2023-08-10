import React from 'react'

const AboutMe = () => {
    return (
        <>
            <div className="container mx-auto container">
                <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                    <div className="max-h-96 md:h-screen">
                        <img className="w-screen h-screen object-cover object-top" src="/mountains.jpg" alt="">
                        </img>
                    </div>
                    <div className="flex bg-lavender p-10">
                        <div className="mb-auto mt-auto max-w-lg">
                            <h2 className="my-6 text-2xl tracking-tight font-extrabold text-black sm:text-3xl md:text-4xl">About Me</h2>
                            <h3 className="my-6 text-xl tracking-tight font-bold text-steel sm:text-2xl md:text-3xl">From Dice to Dreams</h3>
                            <p>Hey there, I'm Adrian, your friendly neighborhood GM. I believe in the magic of dice and the limitless possibilities they hold. With years of experience under my belt, I've learned that it's not just about rolling dice; it's about creating memories, friendships, and epic stories that stand the test of time.</p>
                            <button className="bg-black rounded-md py-3 px-7 my-6 text-white">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe