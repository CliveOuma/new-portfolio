"use client";
import { useState } from "react";
import 'animate.css';
import Image from "next/image";
import TrackVisibility from 'react-on-screen';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setButtonText("Sending...");
  let response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDetails),
  });
  setButtonText("Send message");
  let result = await response.json();
  setFormDetails(formInitialDetails);
  if (result.success) {
    setStatus({ success: true, message: 'Message sent successfully' });
  } else {
    setStatus({ success: false, message: 'Something went wrong, please try again.' });
  }
};

  return (
    <>
      <h2 className='text-center text-4xl font-bold mt-4 py-2  text-white'>Contact</h2>
      <section className="contact my-12 md:my-12 pt-4 gap-2" id="contact">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl flex justify-center items-center text-white font-bold mt-5 mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-4">We can connect as my inbox is always open. Feel free to ask questions or you can simply say Hi,
                I will get back to you shortly!</p>
              <TrackVisibility>
                {({ isVisible }) =>
                  <Image src="/images/contact-image.png"
                    width={300}
                    height={300}
                    className={isVisible ? "animate__animated animate__zoomIn" : ""}
                    alt="Image"
                    style={{ width: "auto", height: "auto" }}
                    priority={true}
                  />
                }
              </TrackVisibility>
            </div>
            <div className="md:w-1/2">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <form onSubmit={handleSubmit} className="w-full">
                      <div className="flex flex-wrap  mt-6">
                        <div className="w-full md:w-1/2 px-2 mb-4">
                          <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 w-full text-black focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-4">
                          <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 w-full text-black focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div className="w-full px-2 mb-4">
                          <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 w-full text-black focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div className="w-full px-2 mb-4">
                          <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 w-full text-black focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div className="w-full px-2 mb-4">
                          <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} className="bg-gray-200 border border-gray-300 rounded-lg py-2 px-4 w-full text-black focus:outline-none focus:border-indigo-500"></textarea>
                        </div>
                        <div className="w-full px-2">
                          <button type="submit" className="bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">{buttonText}</button>
                        </div>
                      </div>
                      {
                        status.message &&
                        <p className={status.success === false ? "text-red-600" : "text-green-600"}>{status.message}</p>
                      }
                    </form>
                  </div>
                }
              </TrackVisibility>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
