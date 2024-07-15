import { steriods } from "@/constant";
import Image from "next/image";

export const Steriods = () => {
  return (
    <section className="padding-x mt-[9.375rem]">
      <div className="w-[42.5%]">
        <h2>
          Not your typical P2P exchange, but P2P on{" "}
          <span className="linear-text">steroids</span>
        </h2>
        <p className=" mt-6 text-black_100 text-lg leading-[2.0225rem]">
          We have added some unique features that make your trading experience
          much delightful. You won’t find these anywhere else.
        </p>
      </div>
      <div className="mt-20 flex justify-center gap-6">
        {steriods.map((item, index) => (
            <div key={item.id} className="w-1/4 dashed-border py-8 overflow-hidden grid">
                <h3 className="steriods-h3">
                    {item.id}
                </h3>
                <p className="text-black_200 mt-4 leading-[1.618rem]">{item.text}</p>
                <div className=" mt-16 relative flex justify-end">
                    <Image src={item.imgUrl} alt={item.id} width={500} height={500} className="relative w-[8.5rem]" />
                    <div className={`bg-glow absolute ${index % 2 == 0 ? "-right-[6rem] top-[4rem]" : "-right-[4rem] -top-[2rem]"  } `}></div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};
