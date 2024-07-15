import Image from "next/image";
import { Cta } from "./Cta";
import Button from "./Button";
import { currencyCrypto, socials } from "@/constant";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="padding-x mt-[8.5rem] pt-[12.5rem] pb-[5rem]">
      <Cta />
      <footer className="w-full flex items-start justify-between mt-[5rem] ">
        {/* logo and gets started btn */}
        <div className="w-[18%] flex flex-col items-center justify-start">
          <a href="./" className="hover:scale-[1.03] transition-all duration-300">
          <Image
            src="./assets/svgs/Logo-footer.svg"
            alt="logo"
            width={100}
            height={100}
            className="w-[9.5rem]"
          />
          </a>
          <div className="w-fit mt-10 mb-12">
          <Button type="button" text="Get Started" variant="btn-secondary" />
          </div>
          <p className="text-black_300 text-center leading-[1.618rem]">
            Barta Inc, <br />
            Plot 213A Muri Okunola Street Victoria Island, Lagos, Nigeria.
          </p>
        </div>

        {/* quick links */}
        <div className=" w-fit gap-20  flex items-center justify-start">
          {/* buy offers */}
          <ul className="grid gap-6 text-md " >
            <li className="text-black_200">Buy offers</li>
            {currencyCrypto.map((coin) => (
              <li key={coin.id} className="hover:text-purple_900 transition-all duration-300">  <a href="/"> Buy {coin.name} </a></li>
            ))}
            <li className="hover:text-purple_900 transition-all duration-300"><a href="/">Create buy offer</a></li>
          </ul>

          {/* sell offers */}
          <ul className="grid gap-6 text-md" >
            <li className="text-black_200">Sell offers</li>
            {currencyCrypto.map((coin) => (
              <li key={coin.id} className="hover:text-purple_900 transition-all duration-300"> <a href="/"> Sell {coin.name} </a></li>
            ))}
            <li className="hover:text-purple_900 transition-all duration-300"> <a href="/"> Create sell offer </a></li>
          </ul>

          {/* legal */}
          <ul className="grid gap-6 text-md" >
            <li className="text-black_200">Legal</li>
            <li className="hover:text-purple_900 transition-all duration-300"> <a href="/"> T&apos;s and C&apos;s </a></li>
            <li className="hover:text-purple_900 transition-all duration-300"> <a href="/"> AML Policy </a></li>
            <li className="hover:text-purple_900 transition-all duration-300"> <a href="/"> Privacy Policy </a></li>
            <li className="hover:text-purple_900 transition-all duration-300"> <a href="/"> Terms of Service </a></li>
          </ul>
        </div>

        {/* language change and social icons */}
        <div className="w-[18%]  flex flex-col items-center justify-start">
          {/* languages */}
          <div></div>

          <p className="mt-[2.5rem] mb-[3.5rem] text-black_300 text-center leading-[1.618rem]">
            All contents © 2023 Barta Inc. <br/> All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((icon) => (
              <a href={icon.url}
                key={icon.id}
                className="w-fit h-fit icon cursor-pointer">
                <Image
                  src={icon.imgUrl}
                  alt={icon.id}
                  width={40}
                  height={40}
                  className="idle absolute w-[2.5rem] h-[2.5rem]"
                />
                <Image
                  src={icon.imgHoverUrl}
                  alt={icon.id}
                  width={40}
                  height={40}
                  className="hover w-[2.5rem] h-[2.5rem]"
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};
