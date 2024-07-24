import { logos1, logos2, wallets } from "@/constant";
import Image from "next/image";
import React from "react";

export const LineAnimation = () => {
  return (
    <section className=" overflow-hidden padding-x flex-center flex-col relative base:mt-[22rem] mt-[46rem] pt-4 ">
      {/* line animation */}
      <div className="relative">
        {/* desktop animated svg */}
        <svg
          style={{
            width: "calc(var(--svg-width) + 2.25rem)",
            height: "calc(var(--svg-height) + 2.25rem)",
          }}
          viewBox="0 0 1283 630"
          preserveAspectRatio="xMidYMid meet"
          className="border-none absolute base:block hidden">
          {/* Define the path for the animated line */}
          <path
            id="animated-line"
            d="M 10 0 L 1263 0 L 1263 621 L 10 621 Z"
            fill="none"
            stroke="black"
            strokeWidth="5rem"
            strokeDasharray="3111 611">
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-3722"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* mobile animated svg */}
        <svg
          style={{
            width: "calc(var(--svg-width) + 2.25rem)",
            height: "calc(var(--svg-height) + 2.25rem)",
          }}
          viewBox="0 0 368 550"
          preserveAspectRatio="xMidYMid meet"
          className="border-none absolute base:hidden ">
          {/* Define the path for the animated line */}
          <path
            id="animated-line"
            d="M 0 10 L 358 10 L 358 525 L 0 525 Z"
            fill="none"
            stroke="#000000"
            strokeWidth="1rem"
            strokeDasharray="1488 300">
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-1788"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {/* main rectangle */}
        <svg
          style={{
            width: "calc(var(--svg-width) + 1.25rem)",
            height: "calc(var(--svg-height) + 1.25rem)",
          }}
          preserveAspectRatio="xMidYMid meet"
          className=" base:flex hidden">
          {/* <!-- Define the linear gradient --> */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0.66%"
                style={{ stopColor: "#5a00fe", stopOpacity: "1" }}
              />
              <stop
                offset="55.59%"
                style={{ stopColor: "#fd5265", stopOpacity: "1" }}
              />
              <stop
                offset="107.34%"
                style={{ stopColor: "#fecb00", stopOpacity: "1" }}
              />
            </linearGradient>
          </defs>
          {/* <!-- Draw the rectangle with dashed stroke --> */}
          <rect
             x="0.625rem" /* 10px / 16 */
             y="0.625rem" /* 10px / 16 */
             rx="1.5rem" /* 30px / 16 */
             ry="1.5rem" /* 30px / 16 */
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="0.125rem"
            strokeDasharray= "4, 2"
            strokeDashoffset= "0"
            style={{ width: "var(--svg-width)", height: "var(--svg-height)" }}
          />
        </svg>

        {/* mobile main rectangle */}
        <svg
          style={{
            width: "calc(var(--svg-width) + 1.25rem)",
            height: "calc(var(--svg-height) + 1.25rem)",
          }}
          preserveAspectRatio="xMidYMid meet"
          className=" flex-center base:hidden flex">
          {/* <!-- Define the linear gradient --> */}
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#ff4c61", stopOpacity: "1" }}
              />
              <stop
                offset="107.34%"
                style={{ stopColor: "#ff7c44", stopOpacity: "1" }}
              />
            </linearGradient>
          </defs>
          
          {/* <!-- Draw the rectangle with dashed stroke --> */}
          <rect
             x="0.625rem" /* 10px / 16 */
             y="0.625rem" /* 10px / 16 */
             rx="1.15rem" /* 18.4px / 16 */
             ry="1.15rem" /* 18.4px / 16 */
            fill="none"
            stroke="url(#gradient3)"
            strokeWidth="0.12rem"
            strokeDasharray= "4, 2"
            strokeDashoffset= "0"
            style={{ width: "var(--svg-width)", height: "var(--svg-height)" }}
          />
        </svg>
      </div>

      {/* main content */}
      <div className="gap-12 flex justify-between base:flex-row flex-col absolute border-dashed base:border-[0.1rem] border-[0.08rem] base:rounded-[1.5rem] rounded-[1.15rem] border-black_400 base:px-[6.5rem] base:py-[4.5rem] p-14" style={{
            width: "calc(var(--svg-width) + 0.064rem)",
            height: "calc(var(--svg-height) + 0.064rem)",
          }}>

        <h2 className=" base:leading-[4.5rem] leading-[2.29rem] base:text-[2.6rem] text-[1.412rem] base:w-[45%] w-full base:my-auto mx-auto">
          <span className="linear-text mr-2">Bridging the gap</span>
          between traditional finance and blockchain technology.
        </h2>

        <div className=" mx-auto flex base:gap-[4.5rem] gap-[3rem] scroll-blur overflow-hidden">
          <div className="divide-y-[0.1rem] flex-col h-fit scroll-animation divide-black_400 divide-dashed ">
            {logos1.map((logo, index) => (
              <div key={index} className={`base:py-12 py-[1.75rem] w-full flex justify-center`}>
                <Image
                  src={logo.imgUrl}
                  alt={logo.id}
                  width={150}
                  height={50}
                  className="base:w-[9rem] h-[2.5rem] w-[5.5rem]"
                />
              </div>
            ))}
          </div>

          <div className="divide-y-[0.1rem] mr-[1rem] relative bottom-0 flex-col h-fit scroll-animation2 divide-black_400 divide-dashed ">
            {logos2.map((logo, index) => (
              <div key={index} className={`base:py-12 py-[1.75rem] w-full flex justify-center`}>
                <Image
                  src={logo.imgUrl}
                  alt={logo.id}
                  width={150}
                  height={50}
                  className="base:w-[9rem] h-[2.5rem] w-[5.5rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
