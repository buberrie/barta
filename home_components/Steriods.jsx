import { steriods } from "@/constant";
import Image from "next/image";

export const Steriods = () => {
  return (
    <section className="padding-x base:mt-[9.375rem] relative base:top-0 -top-[27rem] ">
      {/* heading and subheading */}
      <div className="base:w-[42.5%] w-full">
        <h2>
          Not your typical P2P exchange, <br/> but P2P on{" "}
          <span className="linear-text">steroids</span>
        </h2>
        <p className=" mt-6 text-black_100 base:text-lg text-sm base:leading-[2.0225rem] leading-[1.41575rem]">
          We have added some unique features that make your trading experience
          much delightful. You won’t find these anywhere else.
        </p>
      </div>

      {/* main content */}
      <div className="mt-20 base:flex justify-center grid grid-cols-2 base:gap-6 gap-4">
        {steriods.map((item, index) => (
            <div key={item.id} className=" base:w-1/4 w-full dashed-border base:py-8 py-3 overflow-hidden grid">
                <h3 className="steriods-h3">
                    {item.id}
                </h3>
                <p className="text-black_200 base:mt-4 mt-2 base:leading-[1.618rem] base:text-base text-[0.8rem]">{item.text}</p>
                <div className=" base:mt-16 mt-10 relative flex justify-end">
                    <Image src={item.imgUrl} alt={item.id} width={500} height={500} className="relative base:w-[8.5rem] w-[5.2rem]" />
                    <div className={`bg-glow absolute ${index % 2 == 0 ? "base:-right-[6rem] -right-[10rem] top-[4rem]" : "base:-right-[4rem] -right-[10rem] base:-top-[2rem]"  } `}></div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};
