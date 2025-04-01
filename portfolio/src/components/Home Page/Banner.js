import Link from 'next/link'
import React from 'react'
import BannerIcon from './BannerIcon'

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
          <div className="text-white min-h-screen flex flex-col justify-center items-start py-16 md:py-36">
            {/* Intro text */}
            <p className="text-[#C8C8CF] font-semibold mb-2 text-xl pt-28 - ">Hello, I&apos;m David.</p>
            <h1 className="text-4xl md:text-7xl font-bold leading-snug text-[#ABABB5]">
              A Web developer and Designer <br/> Lead web dev at <br/>
              <span className="text-gray-400">Code 
              Connoisseurs</span>
            </h1>

            {/* button */}
            <div className="mt-12 mb-28">
              <Link href="#" className='inline-block bg-transparent border border-white text-white px-6 py-2 rounded-full hover:text-black transition'>Hire Me</Link>
            </div>

            {/* button */}
            <BannerIcon/>

          </div>
    </div>
  );
};

export default Banner