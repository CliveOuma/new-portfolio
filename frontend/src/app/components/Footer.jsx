import React from 'react';


const Footer = () => {
  return (
    <footer className="footer border border-t-slate-200 text-white border-l-transparent border-r-transparent">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4">
          <div className="mb-4 sm:mb-0">
          <a href="#" className="mr-2 text-sm">Copyright © 2024</a>
          </div>
          <div className="text-center sm:text-right">
            <div className="flex justify-center sm:justify-end mb-2 ">
            <a href="tel:+254740719423/" className="inline-block mr-4">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center relative overflow-hidden transition 
        duration-300 ease-in-out transform hover:scale-110 text-white">
        <img src="/assets/img/phone-solid.svg" alt="Image" className="w-6 filter invert h-6" />
           </div>
         </a>
      <a href="https://www.linkedin.com/in/clive-ouma-065607251" className="inline-block mr-4">
      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center relative overflow-hidden transition 
          duration-300 ease-in-out transform hover:scale-110">
      <img src="/assets/img/linkedin-in.svg" alt="Image"  className="w-6 filter invert h-6" />
      </div>
      </a>
      <a href="https://github.com/CliveOuma" className="inline-block mr-4">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center relative overflow-hidden transition 
        duration-300 ease-in-out transform hover:scale-110">
        <img src="/assets/img/github.svg" alt="Image" className="w-6 filter invert h-6" />
           </div>
         </a>
      <a href="https://www.instagram.com/clive_ouma" className="inline-block">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center relative overflow-hidden transition 
          duration-300 ease-in-out transform hover:scale-110">
      <img src="/assets/img/instagram.svg" alt="Image"  className="w-6  h-6" />
      </div>
      </a>
      <div className="fixed bottom-5 right-5">
        <a href="https://wa.me/+254740719423" className="block">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center relative overflow-hidden transition duration-300 ease-in-out transform hover:scale-110">
            <img src="/assets/img/whatsapp.svg" alt="WhatsApp" className="w-7 filter invert h-7" />
          </div>
        </a>
      </div>
    </div>
      <p className="text-sm">All Rights Reserved<span> | Clive Ouma.</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
