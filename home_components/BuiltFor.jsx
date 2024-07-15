import Button from "@/components/Button";
import Image from "next/image";

export const BuiltFor = () => {
  return (
    <section className="mt-[9.375rem] px-[16rem] relative ">
      <h2 className="ml-[4.5rem] w-[60%] relative mb-[2rem]">
        Built for freelancers who exchange currencies the intelligent way.
      </h2>
      <div className="ml-[4.5rem] w-fit flex items-center gap-2 get-started-btn">
        <Button
          type="button"
          text="Get Started"
          variant="btn-tertiary"
          textColor="color-white"
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
      <div className=" mt-[6.31rem] grid grid-rows-2 grid-cols-3 gap-6">
        <div className="grid-card row-span-2 relative ">
          <span>BEST OFFERS</span>
          <div className="w-full absolute top-[16rem] -left-[5rem] flex-center">
            <Image src="./assets/svgs/holographic.svg" alt="holographic" width={500} height={500} className="absolute w-[14.0625rem]" />
            <Image src="./assets/svgs/bg-glow.svg" alt="background glow" width={200} height={200} className="absolute w-[8.625rem]" />
          </div>
          <h3>
            Find trustworthy dealers to exchange your funds for the best prices.
          </h3>
        </div>
        <div className="grid-card col-span-2 relative">
          <span>payment solutions</span>
          <Image src="/assets/images/Images.png" alt="images" width={1000} height={1000} className=" w-[42rem] h-[42rem] absolute -top-[15rem] -right-[15rem]" />
          <h3 className="md:w-[40%] w-full">Variety of payment methods</h3>
        </div>
        <div className="grid-card">
          <span>AI MATCHING</span>
          <h3>Match your offers to merchants with AI</h3>
        </div>
        <div className="grid-card">
          <span>LOCAL & FOREIGN</span>
          <h3>Exchange down to your local currency</h3>
        </div>
      </div>
      <Image
        src="./assets/svgs/gradient-shape-0.svg"
        alt="gradient-shape"
        width={1000}
        height={1000}
        className="absolute w-[35rem] h-[55rem] right-[1rem] top-[27.5rem] -z-[1]"
      />
    </section>
  );
};
