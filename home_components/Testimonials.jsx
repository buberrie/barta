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
    <section className=" w-full flex items-center flex-col mt-[12.5rem] relative">
      <div className="w-full h-fit">
      <Image
        src="/assets/svgs/testimonial-bg.svg"
        alt="bg gradient"
        width={1440}
        height={1200}
        className="absolute top-0 -z-[1]"
      />
      </div>
      <h2 className="test-[3.125rem] leading-[5.05625rem] mt-[9.5rem] w-1/2 text-center">
        Over 2000 freelancers and merchants have traded with Barta
      </h2>
      <Image
        src="./assets/svgs/gradient-shape.svg"
        alt="glow background"
        width={700}
        height={700}
        className="absolute -top-[4rem] -z-[1] w-[60rem]"
      />
      <div
        className="w-full overflow-x-scroll overflow-container mt-20 scroll-snap"
        ref={scrollContainerRef}>
        <div className="flex items-start gap-6 w-fit relative h-fit px-6 scroll-snap">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="dashed-border bg-blur py-10 w-[19rem]">
              <div className="flex gap-4 items-center">
                <div className="w-[3.625rem] h-[3.625rem]">
                  <Image
                    src={testimonial.imgUrl}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h4>{testimonial.name}</h4>
                  <span className="text-[0.8rem] text-black_100">
                    {testimonial.title}
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-[1.25rem] leading-[2.0225rem] mb-4">
                  {testimonial.subContent}
                </h3>
                <p className="text-black_100 leading-[1.618rem]">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-center gap-4 mt-20 w-full">
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
