import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" w-full bg-gray-900 text-gray-200">
      <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <div className="md:flex">
          <div className="lg:text-lg text-justify mx-auto p-4 md:flex-[0.7] lg:flex-[0.3] ">
            <div>
              <p className="">
                Welcome to the ASIANCON 2021 , this year we will organize this
                conference in Hybrid Mode( Virtual and Physical Presentation
                will be accepted ) . The 2021 is hosted by the Pimpri Chinchwad
                College of Engineering & Research ( PCCOER) ,Pune.
              </p>
            </div>
            <div className=" flex md:block md:space-y-4 justify-between  my-5 px-2">
              <p className=" flex items-center underline underline-offset-4   ">
                <AiFillPhone className="w-6 h-6 mr-2" />
                +91-812-812-812-8
              </p>
              <p className=" flex items-center underline underline-offset-4 ">
                <AiOutlineMail className="w-6 h-6 mr-2" />
                test@test.com
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360433813!2d73.79292685256993!3d18.52460355342981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1654476247217!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mx-auto w-72 md:w-full  my-5 rounded-md  md:flex-[0.3] lg:flex-[0.7] "
          ></iframe>
        </div>
        <div className="text-center border-t-2 text-gray-400 py-4">
          Copyright © 2022 Aditya Kunwar. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
