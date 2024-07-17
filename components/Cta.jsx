/* eslint-disable @next/next/no-img-element */
'use client'

import Image from "next/image";
import { useState } from "react";

export const Cta = () => {

  const [email, setEmail] = useState(
    {
      value: "",
      error: ""
    }
  )

  const handleEmailChange = (e) => {
    setEmail({
      ...email,
      value: e.target.value,
      error: "" // Clear error on change
    });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    // validation logic
    if (!email.value) {
      setEmail({
        ...email,
        error: "Email is required"
      });
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      setEmail({
        ...email,
        error: "Email is invalid"
      });
    } else {
      // clear field
      setEmail({
        ...email,
        value: "",
        error: "" 
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className=" padding-x font-[Coolvetica] base:pb-0 pb-16 base:border-0 border-b-[0.1rem] border-black_400 border-dashed ">
       {/* scan code section */}
      <article className="base:mb-20 base:rounded-[1.875rem] rounded-[1.5rem] bg-white flex base:flex-row flex-col justify-between relative overflow-hidden">
        {/* info */}
        <div className=" base:p-16 base:pt-12 px-5 py-8 base:pr-0 base:w-[65%] w-full">
          <h2 className="text-black_900 base:text-[3.125rem] text-[1.765rem]">
            Enjoy the potentials of P2P trading{" "}
            <span className="linear-text">at your fingertips.</span>
          </h2>
          <p className="base:mt-8 mt-4 mb-12 base:text-lg text-sm text-black_300 font-[Supreme-Medium] base:w-full w-[80%]">
            Scan the QR Code below to get the Barta mobile app on any device.
          </p>

          {/* qr code section */}
          <div className="flex gap-4">
            {/* QR code */}
            <div className="base:w-[6.25rem] h-[4.85rem] w-[4.85rem] base:h-[6.25rem] relative border border-black_900 hover:scale-105 transition-all">
              <Image
                src="./assets/svgs/qr-code.svg"
                alt="app qr code"
                width={100}
                height={100}
              />
            </div>
            {/* app and play store icon with dark background */}
            <div className="flex flex-col gap-2">
              {/* apple */}
              <div className=" base:w-[8.3125rem] base:h-[2.8125rem] w-[6.6rem] h-[2.205rem] relative hover:scale-[1.02] transition-all cursor-pointer">
                <Image
                  src="./assets/svgs/svg-gobbler.svg"
                  alt="apple"
                  width={133}
                  height={45}
                />
              </div>
              {/* play store */}
              <div className=" base:w-[9.375rem] base:h-[2.8125rem] w-[7.445rem] h-[2.205rem] relative hover:scale-[1.02] transition-all cursor-pointer">
                <Image
                  src="./assets/svgs/Google-play-dark.svg"
                  alt="play store"
                  width={150}
                  height={45}
                />
              </div>
            </div>
          </div>
        </div>

        {/* mobile phone */}
        <div className="base:m-0 m-auto mt-3 overflow-hidden h-full base:w-[32rem] w-[18.5rem] base:pr-[4rem] base:top-[4.5rem] top-1 relative phone">
          <Image
            src="/assets/images/phone.png"
            alt="phone"
            width={430}
            height={800}
            className=" w-full h-full"
          />
        </div>
      </article>

      {/* enter email */}
      <form onSubmit={handleEmailSubmit} className="base:mt-36 mt-24 grid gap-12 relative">
        <h2 className="base:w-[40%] w-[84%] base:text-[2.5rem] text-[1.765rem] base:leading-[4.04375rem] leading-[2.85544rem]">
          Let’s help you get the best value for your money.
        </h2>

        {/* enter email address */}
        <label htmlFor="email" className="relative base:py-8 pb-6 base:px-10 px-2 border-b-[0.1rem] border-black_300 flex justify-between items-center">
        
        {/* custom placeholder */}
        <span
            className={` absolute ${
              email.value
                ? "opacity-0 text-s"
                : " opacity-100 base:text-xxl text-[1.412rem]"
            } transition-all duration-500 text-black_300 -z-[2]`}>
            Enter your email to begin *
          </span>

            {/* input field */}
          <input type="text" id="email" value={email.value} onChange={handleEmailChange} className="input base:text-xxl text-[1.412rem]" />
          
          {/* go button */}
          <div className="w-fit" >
            <button type="submit" className="btn-arrow" >
              <svg
                className="base:w-[1.75rem] base:h-[1.62rem] w-[1.1rem] h-[1rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="26"
                viewBox="0 0 10 13"
                fill="none">
                <path
                  d="M5.78218 11.7822C5.63696 11.637 5.56092 11.4521 5.55406 11.2277C5.54772 11.0033 5.61716 10.8185 5.76238 10.6733L9.64356 6.79208H0.792079C0.567657 6.79208 0.379406 6.71604 0.227327 6.56396C0.0757757 6.41241 0 6.22442 0 6C0 5.77558 0.0757757 5.58733 0.227327 5.43525C0.379406 5.2837 0.567657 5.20792 0.792079 5.20792H9.64356L5.76238 1.32673C5.61716 1.18152 5.54772 0.9967 5.55406 0.772277C5.56092 0.547855 5.63696 0.363036 5.78218 0.217821C5.92739 0.072607 6.11221 0 6.33663 0C6.56106 0 6.74587 0.072607 6.89109 0.217821L12.1188 5.44554C12.198 5.51155 12.2543 5.59393 12.2875 5.69267C12.3203 5.79195 12.3366 5.89439 12.3366 6C12.3366 6.10561 12.3203 6.20462 12.2875 6.29703C12.2543 6.38944 12.198 6.47525 12.1188 6.55445L6.89109 11.7822C6.74587 11.9274 6.56106 12 6.33663 12C6.11221 12 5.92739 11.9274 5.78218 11.7822Z"
                  fill="#E6E6E6"
                />
              </svg>
            </button>
          </div>
        <p className={`absolute base:top-[8rem] top-[4rem] text-[#fd5265] transition-all base:text-sm text-s mt-2 ${email.error ? "opacity-100" : "opacity-0"}`}>{email.error}</p>

        </label>
      </form>

      {/* back to the top button */}
      <div className="w-full flex justify-end">
      <button className=" w-fit flex-center base:gap-4 gap-2 mt-16 back-to-top " onClick={scrollToTop}>
        <span className="base:text-[1.1rem] text-[0.85rem]">Back to the top</span>
        <span className=" rounded-full bg-purple_900 base:p-2 p-[0.3rem] btt-icon">
        <svg
        className="-rotate-90 base:w-[0.813rem] base:h-[0.75rem] w-[0.65rem] h-[0.65rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none">
          <path
            d="M5.78218 11.7822C5.63696 11.637 5.56092 11.4521 5.55406 11.2277C5.54772 11.0033 5.61716 10.8185 5.76238 10.6733L9.64356 6.79208H0.792079C0.567657 6.79208 0.379406 6.71604 0.227327 6.56396C0.0757757 6.41241 0 6.22442 0 6C0 5.77558 0.0757757 5.58733 0.227327 5.43525C0.379406 5.2837 0.567657 5.20792 0.792079 5.20792H9.64356L5.76238 1.32673C5.61716 1.18152 5.54772 0.9967 5.55406 0.772277C5.56092 0.547855 5.63696 0.363036 5.78218 0.217821C5.92739 0.072607 6.11221 0 6.33663 0C6.56106 0 6.74587 0.072607 6.89109 0.217821L12.1188 5.44554C12.198 5.51155 12.2543 5.59393 12.2875 5.69267C12.3203 5.79195 12.3366 5.89439 12.3366 6C12.3366 6.10561 12.3203 6.20462 12.2875 6.29703C12.2543 6.38944 12.198 6.47525 12.1188 6.55445L6.89109 11.7822C6.74587 11.9274 6.56106 12 6.33663 12C6.11221 12 5.92739 11.9274 5.78218 11.7822Z"
            fill="#E6E6E6"
          />
        </svg>
        </span>
      </button>
      </div>
      
    </section>
  );
};
