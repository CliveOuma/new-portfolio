"use client";
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'

const Skill = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill bg-black-100" id="skills">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center sm:border-[#33353F] sm:border">
          <div className="w-full lg:w-10/12">
            <div className="skill-bx wow zoom-in">
              <h2 className="text-3xl font-bold mb-6 text-white justify-center items-center flex">Tech Stack</h2>
              <p className="text-lg mb-8 text-white justify-center items-center flex">I am versatile and advanced in using different programming
                languages, tools and frameworks.<br></br>I am currently learning new technologies to gain relevant skills required.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <Image src="/assets/img/html.png" alt="Image" width={200}
                    height={200} className="w-32 h-32 mx-auto mb-4" />
                  <h5 className="text-xl font-semibold text-center text-white">HTML</h5>
                </div>
                <div className="item">
                  <Image src="/assets/img/git.png" alt="Image" width={200}
                    height={200} className="w-32 h-32 mx-auto mb-4" />
                  <h5 className="text-xl font-semibold text-center text-white">Git</h5>
                </div>
                <div className="item">
                  <Image src="/assets/img/mysql1.png" width={200}
                    height={200} alt="Image" className="w-32 h-32 mx-auto mb-4" />
                  <h5 className="text-xl font-semibold text-center text-white">MySQL</h5>
                </div>
                <div className="item">
                  <Image src="/assets/img/db.png" alt="Image" width={200}
                    height={200} className="w-32 h-32 mx-auto mb-4 rounded-full" />
                  <h5 className="text-xl font-semibold text-center text-white">MongoDB</h5>
                </div>
                <div className="item">
                  <Image src="/assets/img/nodejs.png" alt="Image" width={200}
                    height={200} className="w-32 h-32 mx-auto mb-4" />
                  <h5 className="text-xl font-semibold text-center text-white">Node JS</h5>
                </div>
                <div className="item">
                  <Image src="/assets/img/react.png" alt="Image" width={200}
                    height={200} className="w-32 h-32 mx-auto mb-4" />
                  <h5 className="text-xl font-semibold text-center text-white">React</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill;
