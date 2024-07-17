import Button from "@/components/Button";
import Image from "next/image";

export const BuiltFor = () => {
  return (
    <section className=" base:overflow-visible overflow-hidden base:mt-[9.375rem] mt-[5.75rem] md:px-[16rem] base:px-[10rem] px-10 relative ">
      {/* heading */}
      <h2 className="base:ml-[4.5rem] base:w-[60%] w-full relative mb-[2rem]">
        Built for freelancers who exchange currencies the intelligent way.
      </h2>

      {/* action button */}
      <div className="base:ml-[4.5rem] w-fit flex items-center gap-2 get-started-btn">
        <Button
          type="button"
          text="Get Started"
          variant="btn-tertiary"
          textColor="text-black_50"
        />
        <svg
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
      </div>

      {/* main content  */}
      <div className=" mt-[6.31rem] base:grid grid-rows-2 grid-cols-3 flex flex-col base:gap-6 gap-4 base:w-full w-[95%]">
        {/* best offer */}
        <div className="grid-card row-span-2 relative ">
          <span>BEST OFFERS</span>
          <div className="w-full base:absolute relative base:top-[16rem] top-2 base:-left-[5rem] -left-[7rem] -mb-2 flex-center">
            <Image src="./assets/svgs/holographic.svg" alt="holographic" width={500} height={500} className="base:absolute base:w-[14.0625rem] w-[8.8125rem] " />
            <Image src="./assets/svgs/bg-glow.svg" alt="background glow" width={500} height={500} className="absolute base:w-[8.625rem] w-[16rem]" />
          </div>
          <h3>
            Find trustworthy dealers to exchange your funds for the best prices.
          </h3>
        </div>
        {/* payment solution */}
        <div className="grid-card col-span-2 relative base:h-fit h-[23.125rem]">
          <span>payment solutions</span>
          <Image src="/assets/images/Images.png" alt="images" width={500} height={500} className=" base:w-[35rem] base:h-[40.5rem] w-full h-[24rem] absolute base:-top-[13.5rem] top-0 base:-right-[6.5rem] -right-[4.5rem] " />
          <h3 className="md:w-[40%] w-[50%]">Variety of payment methods</h3>
        </div>
        {/* ai matching */}
        <div className="grid-card">
          <span>AI MATCHING</span>
          <h3 className="base:w-full w-[55%]">Match your offers to merchants with AI</h3>
        </div>
        {/* local & foreign */}
        <div className="grid-card">
          <span>LOCAL & FOREIGN</span>
          <h3 className="base:w-full w-[50%]">Exchange down to your local currency</h3>
        </div>
      </div>

      <Image
        src="./assets/svgs/gradient-shape-0.svg"
        alt="gradient-shape"
        width={1000}
        height={1000}
        className="base:absolute relative base:w-[35rem] w-full base:h-[55rem] base:right-[1rem] -right-[5rem] base:top-[27.5rem] -top-[18rem] -z-[1]"
      />

    </section>
  );
};
