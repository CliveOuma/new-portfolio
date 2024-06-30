"use client"
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='place-self-center text-center sm:text-left col-span-7 justify-self-start'>
          <h1 className='text-white mb-4 text-2xl sm:text-5xl font-extrabold lg:text-6xl lg:leading-normal'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>Hello, I am {" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Clive Ouma',
                1000,
                'Software Engineer',
                1000,
                'Web Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-white lg:text-xl text-base mb-6 sm:text-lg'>
            I am a Software Developer creating accessible
            and quality software applications.
          </p>
          <div>
            <button className='py-3 px-6 mr-4 rounded-full  sm:w-fit w-full bg-gradient-to-br from-orange-500 via-red-600 to-blue-500 hover:bg-slate-200 text-white'>
              <a href="#contact">Hire me !</a></button>
            <button className='py-1 px-1 rounded-full sm:w-fit mt-3 w-full bg-gradient-to-br  from-orange-500 via-red-600 to-blue-500  hover:bg-slate-900 text-white border border-white '>
              <span className='block bg-black rounded-full px-5 py-2 hover:bg-slate-900'><a href="/docs/Resume.pdf" className="flex items-center">
                <span className="mr-2">Download Resume</span><Image src="/assets/img/download-solid.svg" width={3}
                  height={3} alt="download" className="w-5 filter invert h-5" />
              </a></span></button>
          </div>
        </div>
        <div className='col-span-4 place-self-center mt-3 lg:mt-0'>
          <div className='rounded-full relative lg:w-[400px] lg:h-[400px]  w-[200px] h-[200px]'>
            <Image
              src='/images/hero-image.jpg'
              width={300}
              height={300}
              priority={true}
              style={{ width: "auto", height: "auto" }}
              alt="my image"
              className='rounded-full mt-10'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
