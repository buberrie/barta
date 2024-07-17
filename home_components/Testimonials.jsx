"use client";

import { useRef } from "react";
import { testimonials } from "@/constant";
import Image from "next/image";

export const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
            left: -scrollContainerRef.current.clientWidth / 2, // scroll by half the width of the parent width
            behavior: 'smooth',
          });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
            left: scrollContainerRef.current.clientWidth / 2, // scroll by half the width of the parent width
            behavior: 'smooth',
          });
    }
  };

  return (
    <section className="w-full flex items-center flex-col base:mt-[12.5rem] relative base:top-0 -top-[21rem]">
      
      {/* heading and background images */}
      <div className="w-full h-fit">
      <Image
        src="/assets/svgs/testimonial-bg.svg"
        alt="bg gradient"
        width={1440}
        height={1200}
        className="absolute top-0 -z-[1]"
      />
      </div>
      <h2 className="text-[1.765rem] leading-[2.856rem] base:text-[3.125rem] base:leading-[5.05625rem] base:mt-[9.5rem] mt-[6.25rem] base:w-[60%] w-[75%] text-center">
        Over 2000 freelancers and merchants have traded with Barta
      </h2>

      {/* gradient image */}
      <Image
        src="/assets/images/Gradient-shape.png"
        alt="glow background"
        width={700}
        height={700}
        className="absolute base:ml-[15rem] base:top-24 top-16 -z-[1] base:w-[30rem] w-full"
      />

      {/* testimonials / content cards */}
      <div
        className="w-full overflow-x-scroll overflow-container mt-20 scroll-snap"
        ref={scrollContainerRef}>
        <div className="flex items-start base:gap-6 gap-4 w-fit relative h-fit base:px-6 px-4 scroll-snap">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="dashed-border bg-blur base:py-10 py-6 base:w-[19rem] w-[14.2rem]">
              <div className="flex base:gap-4 gap-2 items-center">
                <div className="w-[2.25rem] h-[2.25rem] base:w-[3.625rem] base:h-[3.625rem]">
                  <Image
                    src={testimonial.imgUrl}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-col base:gap-2 gap-1">
                  <h4 className="base:text-base text-[0.65rem]">{testimonial.name}</h4>
                  <span className="base:text-[0.8rem] text-[0.6rem] text-black_100">
                    {testimonial.title}
                  </span>
                </div>
              </div>
              <div className="base:mt-8 mt-6">
                <h3 className="base:text-lg text-base base:leading-[2.0225rem] mb-4">
                  {testimonial.subContent}
                </h3>
                <p className="text-black_100 leading-[1.618rem] base:text-base text-sm">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-center gap-4 base:mt-20 mt-16 w-full">
        <Image
          src="./assets/svgs/go-right.svg"
          alt="left"
          width={50}
          height={50}
          className="cursor-pointer w-[2.8125rem] h-[2.8125rem] rotate-180"
          onClick={scrollLeft}
        />
        <Image
          src="./assets/svgs/go-right.svg"
          alt="right"
          width={50}
          height={50}
          className="cursor-pointer w-[2.8125rem] h-[2.8125rem]"
          onClick={scrollRight}
        />
      </div>
    </section>
  );
};
