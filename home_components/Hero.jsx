import Image from "next/image";
import { TradeCard } from "./TradeCard";

export const Hero = () => {
  return (
    <header className="relative">
      <div className=" absolute base:top-[6.5rem] padding-x top-12 w-full flex-center flex-col">
        <h1 className="relative base:text-xxxxl text-[1.765rem] flex-center flex-col base:leading-[5rem] leading-[2.758rem]">
          <div className="z-[2] bg-black_900">
            Get the <span className="linear-text">best exchange rates</span>
          </div>
          <div className="relative">
            <span className="relative base:-left-[6.5rem] -left-[1.7rem] ">for your</span>
            <div className="relative flex flex-col base:-top-20 base:left-[7.5rem] -top-[2.7rem] left-[4.5rem]">
              <span className="relative salary">salary</span>
              <span className="absolute crypto">crypto</span>
              <span className="absolute fiat">fiat</span>
            </div>
          </div>
        </h1>
        <p className="z-[2] base:w-[50.6875rem] w-full text-center base:text-lg text-sm text-black_200 font-[Supreme-Regular] relative base:-top-[3.8rem] -top-[2.1rem] py-1">
          <span className="bg-black_900">With 200+ payment methods and thousands of reputable merchants, get
          the most bang for your buck when you</span> <span className="base:bg-black_900 bg-transparent">exchange digital and fiat
          currencies.</span>
        </p>
      </div>
      <div className=" -z-[1] relative md:top-[8.25rem] top-[7.5rem] w-full base:h-[64rem] h-[22.3rem] " >
      <Image
        src="/assets/images/hero-animation.gif"
        alt="hero"
        width={1440}
        height={1024}
        className=" w-full h-full object-cover"
      />
      </div>
      <div className="flex-center w-full absolute base:top-[26.6rem] top-[18.8rem] padding-x">
        <TradeCard/>
      </div>
    </header>
  );
};
