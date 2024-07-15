/* eslint-disable @next/next/no-img-element */
'use client'

import Image from "next/image";
import { useState } from "react";

export const Cta = () => {

  const [email, setEmail] = useState('')

  return (
    <section className="font-[Coolvetica]">
       {/* scan code section */}
      <article className="mb-20 rounded-[1.875rem] bg-white flex justify-between relative overflow-hidden">
        {/* info */}
        <div className=" p-16 pt-12 pr-0 w-[65%]">
          <h2 className="text-black_900 text-[3.125rem]">
            Enjoy the potentials of P2P trading{" "}
            <span className="linear-text">at your fingertips.</span>
          </h2>
          <p className="mt-8 mb-12 text-lg text-black_300 font-[Supreme-Medium]">
            Scan the QR Code below to get the Barta mobile app on any device.
          </p>

          {/* qr code section */}
          <div className="flex gap-4">
            {/* QR code */}
            <div className="w-[6.25rem] h-[6.25rem] relative border border-black_900 hover:scale-105 transition-all">
              <Image
                src="./assets/svgs/qr-code.svg"
                alt="app qr code"
                width={100}
                height={100}
                // className="w-full h-full absolute object-contain"
              />
            </div>
            {/* app and play store icon with dark background */}
            <div className="flex flex-col gap-2">
              {/* apple */}
              <div className=" w-[8.3125rem] h-[2.8125rem] relative hover:scale-[1.02] transition-all cursor-pointer">
                <Image
                  src="./assets/svgs/svg-gobbler.svg"
                  alt="apple"
                  width={133}
                  height={45}
                />
              </div>
              {/* play store */}
              <div className=" w-[9.375rem] h-[2.8125rem] relative hover:scale-[1.02] transition-all cursor-pointer">
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
        <div className=" overflow-hidden h-full w-fit pr-[4rem] top-2 relative phone">
          <Image
            src="/assets/images/phone.png"
            alt="phone"
            width={430}
            height={800}
            className=" w-[38rem] h-full"
          />
        </div>
      </article>

      {/* enter email */}
      <form className="mt-36 grid gap-12">
        <h2 className="w-[40%]">
          Let’s help you get the best value for your money.
        </h2>
        <label htmlFor="email" className="relative py-8 px-10 border-b-[0.1rem] border-black_300 flex justify-between items-center">
        <span
            className={` absolute ${
              email
                ? "opacity-0 text-s"
                : " opacity-100 text-xxl"
            } transition-all duration-500 text-black_300 -z-[2]`}>
            Enter your email to begin *
          </span>
          <input type="text" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="input text-xxl" />
          <div className="w-fit">
            <button className="btn-arrow">
              <svg
                className="w-[1.75rem] h-[1.62rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="26"
                viewBox="0 0 10 13"
                fill="none">
                <path
                  d="M5.78218 11.7822C5.63696 11.637 5.56092 11.4521 5.55406 11.2277C5.54772 11.0033 5.61716 10.8185 5.76238 10.6733L9.64356 6.79208H0.792079C0.567657 6.79208 0.379406 6.71604 0.227327 6.56396C0.0757757 6.41241 0 6.22442 0 6C0 5.77558 0.0757757 5.58733 0.227327 5.43525C0.379406 5.2837 0.567657 5.20792 0.792079 5.20792H9.64356L5.76238 1.32673C5.61716 1.18152 5.54772 0.9967 5.55406 0.772277C5.56092 0.547855 5.63696 0.363036 5.78218 0.217821C5.92739 0.072607 6.11221 0 6.33663 0C6.56106 0 6.74587 0.072607 6.89109 0.217821L12.1188 5.44554C12.198 5.51155 12.2543 5.59393 12.2875 5.69267C12.3203 5.79195 12.3366 5.89439 12.3366 6C12.3366 6.10561 12.3203 6.20462 12.2875 6.29703C12.2543 6.38944 12.198 6.47525 12.1188 6.55445L6.89109 11.7822C6.74587 11.9274 6.56106 12 6.33663 12C6.11221 12 5.92739 11.9274 5.78218 11.7822Z"
                  fill="#E6E6E6"
                />
              </svg>{" "}
            </button>
          </div>
        </label>
      </form>

      {/* back to the top button */}
      <div className="w-full flex justify-end">
      <button className=" w-fit flex-center gap-4 mt-16 back-to-top ">
        <span className="text-[1.1rem]">Back to the top</span>
        <span className=" rounded-full bg-purple_900 p-2 btt-icon">
        <svg
        className="-rotate-90 w-[0.813rem] h-[0.75rem]"
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
