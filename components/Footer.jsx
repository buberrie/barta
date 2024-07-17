import Image from "next/image";
import { Cta } from "./Cta";
import Button from "./Button";
import { currencyCrypto, socials } from "@/constant";
import Link from "next/link";
import { Dropdown } from "./Dropdown";

export const Footer = () => {
  return (
    <section className=" base:mt-[8.5rem] base:pt-[12.5rem] base:pb-[5rem] pb-12 relative base:top-0 -top-[1.75rem]">
      <Cta />
      <footer className=" padding-x w-full mt-[5rem] ">
        <div className="flex items-start justify-between base:gap-0 gap-[3rem] w-full base:mb-0 mb-16">
          {/* logo and gets started btn */}
          <div className="base:w-[18%] w-1/2 flex flex-col items-center justify-start">
            <a
              href="./"
              className="hover:scale-[1.03] transition-all duration-300">
              <Image
                src="./assets/svgs/Logo-footer.svg"
                alt="logo"
                width={100}
                height={100}
                className="base:w-[9.5rem] w-[5rem]"
              />
            </a>

            <div className="w-fit base:mt-10 mt-6 base:mb-12 mb-8">
              <Button
                type="button"
                text="Get Started"
                variant="btn-secondary"
              />
            </div>

            <p className="text-black_300 text-center base:text-base text-s base:leading-[1.618rem]">
              Barta Inc, <br />
              Plot 213A Muri Okunola Street Victoria Island, Lagos, Nigeria.
            </p>
          </div>

          {/* quick links desktop */}
          <div className="text-md w-fit gap-20 base:flex items-center justify-start hidden">
            {/* buy offers */}
            <ul className="grid base:gap-6 gap-4 ">
              <li className="text-black_200">Buy offers</li>
              {currencyCrypto.map((coin) => (
                <li
                  key={coin.id}
                  className="hover:text-purple_900 text-black_50 transition-all duration-300">
                  <a href="/"> Buy {coin.name} </a>
                </li>
              ))}
              <li className="hover:text-purple_900 transition-all duration-300">
                <a href="/">Create buy offer</a>
              </li>
            </ul>

            {/* sell offers */}
            <ul className="grid base:gap-6 gap-4">
              <li className="text-black_200">Sell offers</li>
              {currencyCrypto.map((coin) => (
                <li
                  key={coin.id}
                  className="hover:text-purple_900 text-black_50 transition-all duration-300">
                  <a href="/"> Sell {coin.name} </a>
                </li>
              ))}
              <li className="hover:text-purple_900 transition-all duration-300">
                <a href="/"> Create sell offer </a>
              </li>
            </ul>

            {/* legal */}
            <ul className="grid base:gap-6 gap-4">
              <li className="text-black_200">Legal</li>
              <li className="hover:text-purple_900 text-black_50 transition-all duration-300">
                <a href="/"> T&apos;s and C&apos;s </a>
              </li>
              <li className="hover:text-purple_900 text-black_50 transition-all duration-300">
                <a href="/"> AML Policy </a>
              </li>
              <li className="hover:text-purple_900 text-black_50 transition-all duration-300">
                <a href="/"> Privacy Policy </a>
              </li>
              <li className="hover:text-purple_900 text-black_50 transition-all duration-300">
                <a href="/"> Terms of Service </a>
              </li>
            </ul>
          </div>

          {/* language change and social icons */}
          <div className="base:w-[18%] w-1/2 flex flex-col items-center justify-start">
            {/* languages */}
            <div>
              <Dropdown
                placeholder={
                  <div className="flex gap-4">
                    <Image
                      src="./assets/svgs/world.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="base:w-[1.25rem] w-4"
                    />
                    English
                  </div>
                }
                varient="language-select"
                dropdownBtn={
                  <svg
                    className="base:w-4 w-[0.75rem] base:ml-4 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="9"
                    viewBox="0 0 7 5"
                    fill="none">
                    <path
                      d="M0.807959 0.03125L3.28235 2.50564L5.75675 0.03125L6.51685 0.796749L3.28235 4.03125L0.0478516 0.796749L0.807959 0.03125Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              />
            </div>

            <p className="base:text-base text-s base:mt-10 mt-6 base:mb-14 mb-12 text-black_300 text-center base:leading-[1.618rem]">
              All contents © 2023 Barta Inc. <br /> All rights reserved.
            </p>
            
            <div className="flex base:gap-4 gap-3">
              {socials.map((icon) => (
                <a
                  href={icon.url}
                  key={icon.id}
                  target="_blank"
                  className="w-fit h-fit icon cursor-pointer">
                  <Image
                    src={icon.imgUrl}
                    alt={icon.id}
                    width={40}
                    height={40}
                    className="idle absolute base:w-[2.5rem] base:h-[2.5rem] w-[1.9rem] h-[1.9rem]"
                  />
                  <Image
                    src={icon.imgHoverUrl}
                    alt={icon.id}
                    width={40}
                    height={40}
                    className="hover base:w-[2.5rem] base:h-[2.5rem] w-[1.9rem] h-[1.9rem]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* quick links mobile */}
        <div className="text-s w-full base:hidden flex justify-between">
          {/* buy offers */}
          <ul className="grid base:gap-6 gap-4 ">
            <li className="text-black_200">Buy offers</li>
            {currencyCrypto.map((coin) => (
              <li
                key={coin.id}
                className="hover:text-purple_900 text-black_50 transition-all duration-300">
                <a href="/"> Buy {coin.name} </a>
              </li>
            ))}
            <li className="hover:text-purple_900 transition-all duration-300">
              <a href="/">Create buy offer</a>
            </li>
          </ul>

          {/* sell offers */}
          <ul className="grid base:gap-6 gap-4">
            <li className="text-black_200">Sell offers</li>
            {currencyCrypto.map((coin) => (
              <li
                key={coin.id}
                className="hover:text-purple_900 text-black_50 transition-all duration-300">
                <a href="/"> Sell {coin.name} </a>
              </li>
            ))}
            <li className="hover:text-purple_900 transition-all duration-300">
              <a href="/"> Create sell offer </a>
            </li>
          </ul>

          {/* legal */}
          <ul className="grid base:gap-6 gap-4">
            <li className="text-black_200">Legal</li>
            <li className="hover:text-purple_900 text-black_50 transition-all duration-300">
              <a href="/"> T&apos;s and C&apos;s </a>
            </li>
            <li className="hover:text-purple_900 text-black_50 transition-all duration-300">
              <a href="/"> AML Policy </a>
            </li>
            <li className="hover:text-purple_900 text-black_50 transition-all duration-300">
              <a href="/"> Privacy Policy </a>
            </li>
            <li className="hover:text-purple_900 text-black_50 transition-all duration-300">
              <a href="/"> Terms of Service </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};
