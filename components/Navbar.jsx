"use client";

import Image from "next/image";
import Button from "./Button";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import Link from "next/link";
import { useState, useRef } from "react";

export const Navbar = ({ variant }) => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNavItems = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const src =
    variant === "nav-general"
      ? "./assets/svgs/Logo-1.svg"
      : "./assets/svgs/Logo-2.svg";

  return (
    <section className="sticky base:top-4 top-6 z-[10] ">
      <nav
        className={`bg-blur base:top-4 base:mt-4 top-6 mt-6 base:mx-[3rem] mx-4 border-[0.5px] border-black_300 rounded-[7rem] flex justify-between items-center ${variant}`}>
        {/* aux buttons */}
        <Image
          src="/assets/svgs/hamburger.svg"
          alt="menu"
          width={25}
          height={25}
          onClick={toggleNavItems}
          className="w-[1.5rem] h-[1.5rem] ml-6 base:hidden block"
        />
        <div className="ml-10 base:block hidden">
          {!user ? (
            <ul
              className={`flex base:justify-center base:items-center items-start  gap-6 base:flex-row flex-col ${
                isOpen ? "" : ""
              }`}>
              <li>
                <Button
                  type="button"
                  text="Find Offers"
                  variant="btn-tertiary"
                  textColor="color-white"
                  icon={
                    <svg
                      className="w-[1.15rem] h-[0.815rem]"
                      width="18"
                      height="13"
                      viewBox="0 0 18 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g id="Find offers Icon">
                        <path
                          id="Vector"
                          d="M5.95968 10.0669C7.05924 10.0707 8.10162 9.57775 8.79636 8.7255C9.4911 7.87324 9.76382 6.75298 9.53855 5.67674C9.3134 4.60051 8.61426 3.68362 7.63614 3.18147C6.65793 2.67932 5.50534 2.64574 4.49966 3.09009C3.49384 3.53443 2.74256 4.40908 2.45506 5.47039C2.16757 6.53155 2.37457 7.66599 3.0185 8.5571L0.170265 11.4025C0.0234074 11.5493 -0.0338819 11.7632 0.0197772 11.9637C0.0735689 12.1642 0.230146 12.3208 0.430673 12.3746C0.631194 12.4283 0.845054 12.371 0.991918 12.2243L3.84015 9.37603V9.3759C4.45608 9.82413 5.19804 10.0661 5.95967 10.0669L5.95968 10.0669ZM5.95968 3.96968C6.61503 3.97124 7.2429 4.23307 7.70513 4.6975C8.16749 5.16205 8.42631 5.79109 8.42479 6.44644C8.42323 7.10166 8.1614 7.72953 7.69697 8.19189C7.23255 8.65412 6.60338 8.91294 5.94816 8.91142C5.29281 8.90986 4.66494 8.64803 4.20271 8.1836C3.74035 7.71918 3.48152 7.09014 3.48305 6.43479C3.48072 5.77672 3.74073 5.14483 4.20553 4.67898C4.67035 4.21301 5.30157 3.95156 5.95964 3.95236L5.95968 3.96968Z"
                          fill="currentColor"
                        />
                        <path
                          id="Vector_2"
                          d="M2.98913 1.66138H16.8387C17.0463 1.66138 17.238 1.55082 17.3417 1.37103C17.4454 1.19138 17.4454 0.970126 17.3417 0.790345C17.238 0.610693 17.0463 0.5 16.8387 0.5H2.98913C2.78161 0.5 2.58991 0.610693 2.48622 0.790345C2.38252 0.970126 2.38252 1.19139 2.48622 1.37103C2.58991 1.55082 2.78162 1.66138 2.98913 1.66138Z"
                          fill="currentColor"
                        />
                        <path
                          id="Vector_3"
                          d="M16.8389 4.11523H10.817C10.6096 4.11523 10.4179 4.22593 10.3142 4.40558C10.2104 4.58536 10.2104 4.80662 10.3142 4.98627C10.4179 5.16605 10.6096 5.27661 10.817 5.27661H16.8389C17.0464 5.27661 17.2381 5.16605 17.3418 4.98627C17.4455 4.80662 17.4455 4.58536 17.3418 4.40558C17.2381 4.22593 17.0464 4.11523 16.8389 4.11523Z"
                          fill="currentColor"
                        />
                        <path
                          id="Vector_4"
                          d="M16.8389 7.72656H10.817C10.6096 7.72656 10.4179 7.83726 10.3142 8.01691C10.2104 8.19656 10.2104 8.41795 10.3142 8.5976C10.4179 8.77725 10.6096 8.88794 10.817 8.88794H16.8389C17.0464 8.88794 17.2381 8.77725 17.3418 8.5976C17.4455 8.41795 17.4455 8.19656 17.3418 8.01691C17.2381 7.83726 17.0464 7.72656 16.8389 7.72656Z"
                          fill="currentColor"
                        />
                        <path
                          id="Vector_5"
                          d="M16.839 11.3389H5.95983C5.75244 11.3389 5.56075 11.4494 5.45692 11.6292C5.35323 11.8089 5.35323 12.0301 5.45692 12.2099C5.56075 12.3896 5.75245 12.5002 5.95983 12.5002H16.839C17.0465 12.5002 17.2382 12.3896 17.3419 12.2099C17.4456 12.0301 17.4456 11.8089 17.3419 11.6292C17.2382 11.4494 17.0465 11.3389 16.839 11.3389Z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  }
                />
              </li>
              <li>
                <Button
                  type="button"
                  text="Create Offer"
                  variant="btn-tertiary"
                  textColor="color-white"
                  icon={
                    <svg
                      className="w-[1.15rem] h-[0.875rem]"
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.58068 2.66138H15.4303C15.6378 2.66138 15.8295 2.55082 15.9332 2.37103C16.0369 2.19138 16.0369 1.97013 15.9332 1.79034C15.8295 1.61069 15.6378 1.5 15.4303 1.5H1.58068C1.37316 1.5 1.18147 1.61069 1.07777 1.79034C0.974076 1.97013 0.974076 2.19139 1.07777 2.37103C1.18147 2.55082 1.37317 2.66138 1.58068 2.66138Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.4302 5.11523H9.40828C9.20089 5.11523 9.0092 5.22593 8.9055 5.40558C8.80168 5.58536 8.80168 5.80662 8.9055 5.98627C9.0092 6.16605 9.2009 6.27661 9.40828 6.27661H15.4302C15.6377 6.27661 15.8294 6.16605 15.9331 5.98627C16.0368 5.80662 16.0368 5.58536 15.9331 5.40558C15.8294 5.22593 15.6377 5.11523 15.4302 5.11523Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.4302 8.72675H9.40828C9.20089 8.72675 9.0092 8.83744 8.9055 9.01709C8.80168 9.19674 8.80168 9.41813 8.9055 9.59778C9.0092 9.77743 9.2009 9.88813 9.40828 9.88813H15.4302C15.6377 9.88813 15.8294 9.77743 15.9331 9.59778C16.0368 9.41813 16.0368 9.19674 15.9331 9.01709C15.8294 8.83744 15.6377 8.72675 15.4302 8.72675Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15.4303 12.3386H4.55114C4.34375 12.3386 4.15206 12.4492 4.04823 12.629C3.94454 12.8086 3.94454 13.0299 4.04823 13.2097C4.15205 13.3893 4.34376 13.5 4.55114 13.5H15.4303C15.6378 13.5 15.8295 13.3893 15.9332 13.2097C16.0369 13.0299 16.0369 12.8086 15.9332 12.629C15.8295 12.4492 15.6378 12.3386 15.4303 12.3386Z"
                        fill="currentColor"
                      />
                      <path
                        d="M4.01938 9.716V7.448H6.28738V6.32H4.01938V4.064H2.89138V6.32H0.635375V7.448H2.89138V9.716H4.01938Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                />
              </li>
            </ul>
          ) : (
            <ul className="flex-center gap-6">
              <li>
                <Button
                  type="button"
                  text="tertiary"
                  variant="btn-tertiary"
                  flexDirection="flex-reverse"
                  textColor="color-white"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="5"
                      viewBox="0 0 9 5"
                      fill="none">
                      <path
                        d="M7.95554 0.209529C7.88926 0.143109 7.81053 0.0904142 7.72385 0.0544604C7.63718 0.0185067 7.54426 -2.71777e-08 7.45043 -3.12793e-08C7.35659 -3.5381e-08 7.26368 0.0185066 7.177 0.0544604C7.09033 0.0904141 7.0116 0.143109 6.94531 0.209529L4.16539 2.98945L1.38547 0.209529C1.31914 0.143196 1.24039 0.0905784 1.15372 0.0546795C1.06705 0.0187805 0.974164 0.000303064 0.880356 0.000303059C0.786548 0.000303055 0.693657 0.0187805 0.606989 0.0546794C0.520321 0.0905784 0.441573 0.143196 0.37524 0.209529C0.308907 0.275861 0.25629 0.354609 0.220392 0.441277C0.184493 0.527945 0.166016 0.620835 0.166016 0.714643C0.166016 0.808452 0.184493 0.901341 0.220392 0.988009C0.25629 1.07468 0.308907 1.15343 0.37524 1.21976L3.66386 4.50838C3.73014 4.5748 3.80888 4.62749 3.89555 4.66345C3.98222 4.6994 4.07514 4.71791 4.16897 4.71791C4.26281 4.71791 4.35572 4.6994 4.4424 4.66345C4.52907 4.62749 4.6078 4.5748 4.67409 4.50838L7.96271 1.21976C8.23497 0.947498 8.23497 0.488954 7.95554 0.209529Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                />
              </li>
              <li>
                <Button
                  type="button"
                  text="tertiary"
                  variant="btn-tertiary"
                  flexDirection="flex-reverse"
                  textColor="color-white"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="5"
                      viewBox="0 0 9 5"
                      fill="none">
                      <path
                        d="M7.95554 0.209529C7.88926 0.143109 7.81053 0.0904142 7.72385 0.0544604C7.63718 0.0185067 7.54426 -2.71777e-08 7.45043 -3.12793e-08C7.35659 -3.5381e-08 7.26368 0.0185066 7.177 0.0544604C7.09033 0.0904141 7.0116 0.143109 6.94531 0.209529L4.16539 2.98945L1.38547 0.209529C1.31914 0.143196 1.24039 0.0905784 1.15372 0.0546795C1.06705 0.0187805 0.974164 0.000303064 0.880356 0.000303059C0.786548 0.000303055 0.693657 0.0187805 0.606989 0.0546794C0.520321 0.0905784 0.441573 0.143196 0.37524 0.209529C0.308907 0.275861 0.25629 0.354609 0.220392 0.441277C0.184493 0.527945 0.166016 0.620835 0.166016 0.714643C0.166016 0.808452 0.184493 0.901341 0.220392 0.988009C0.25629 1.07468 0.308907 1.15343 0.37524 1.21976L3.66386 4.50838C3.73014 4.5748 3.80888 4.62749 3.89555 4.66345C3.98222 4.6994 4.07514 4.71791 4.16897 4.71791C4.26281 4.71791 4.35572 4.6994 4.4424 4.66345C4.52907 4.62749 4.6078 4.5748 4.67409 4.50838L7.96271 1.21976C8.23497 0.947498 8.23497 0.488954 7.95554 0.209529Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                />
              </li>
              <li>
                <Button
                  type="button"
                  text="Become a merchant"
                  variant="btn-tertiary"
                  textColor="color-white"
                />
              </li>
            </ul>
          )}
        </div>

        {/* logo */}
        <Link
          href="./"
          className="base:w-[6.25rem] w-[4.5rem] base:ml-10 hover:scale-[1.01] transition-all">
          <Image src={src} alt="logo" width={100} height={60} />
        </Link>

        {/* auth buttons */}
        <div className="flex-center gap-6">
          <div className="base:block hidden">
            {!user ? (
              <ul className="flex-center gap-6">
                <li>
                  <Button
                    type="button"
                    text="Sign in"
                    variant="btn-tertiary"
                    textColor="color-white"
                  />
                </li>
                <li>
                  <Button
                    type="button"
                    text="Create Account"
                    variant="btn-secondary"
                  />
                </li>
              </ul>
            ) : (
              <ul className="flex-center gap-6">
                <li>
                  <Button
                    type="button"
                    text="tertiary"
                    variant="btn-tertiary"
                    flexDirection="flex-reverse"
                    textColor="color-white"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none">
                        <path
                          d="M7.95554 0.209529C7.88926 0.143109 7.81053 0.0904142 7.72385 0.0544604C7.63718 0.0185067 7.54426 -2.71777e-08 7.45043 -3.12793e-08C7.35659 -3.5381e-08 7.26368 0.0185066 7.177 0.0544604C7.09033 0.0904141 7.0116 0.143109 6.94531 0.209529L4.16539 2.98945L1.38547 0.209529C1.31914 0.143196 1.24039 0.0905784 1.15372 0.0546795C1.06705 0.0187805 0.974164 0.000303064 0.880356 0.000303059C0.786548 0.000303055 0.693657 0.0187805 0.606989 0.0546794C0.520321 0.0905784 0.441573 0.143196 0.37524 0.209529C0.308907 0.275861 0.25629 0.354609 0.220392 0.441277C0.184493 0.527945 0.166016 0.620835 0.166016 0.714643C0.166016 0.808452 0.184493 0.901341 0.220392 0.988009C0.25629 1.07468 0.308907 1.15343 0.37524 1.21976L3.66386 4.50838C3.73014 4.5748 3.80888 4.62749 3.89555 4.66345C3.98222 4.6994 4.07514 4.71791 4.16897 4.71791C4.26281 4.71791 4.35572 4.6994 4.4424 4.66345C4.52907 4.62749 4.6078 4.5748 4.67409 4.50838L7.96271 1.21976C8.23497 0.947498 8.23497 0.488954 7.95554 0.209529Z"
                          fill="currentColor"
                        />
                      </svg>
                    }
                  />
                </li>
                <li>
                  <Button
                    type="button"
                    text="tertiary"
                    variant="btn-tertiary"
                    flexDirection="flex-reverse"
                    textColor="color-white"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none">
                        <path
                          d="M7.95554 0.209529C7.88926 0.143109 7.81053 0.0904142 7.72385 0.0544604C7.63718 0.0185067 7.54426 -2.71777e-08 7.45043 -3.12793e-08C7.35659 -3.5381e-08 7.26368 0.0185066 7.177 0.0544604C7.09033 0.0904141 7.0116 0.143109 6.94531 0.209529L4.16539 2.98945L1.38547 0.209529C1.31914 0.143196 1.24039 0.0905784 1.15372 0.0546795C1.06705 0.0187805 0.974164 0.000303064 0.880356 0.000303059C0.786548 0.000303055 0.693657 0.0187805 0.606989 0.0546794C0.520321 0.0905784 0.441573 0.143196 0.37524 0.209529C0.308907 0.275861 0.25629 0.354609 0.220392 0.441277C0.184493 0.527945 0.166016 0.620835 0.166016 0.714643C0.166016 0.808452 0.184493 0.901341 0.220392 0.988009C0.25629 1.07468 0.308907 1.15343 0.37524 1.21976L3.66386 4.50838C3.73014 4.5748 3.80888 4.62749 3.89555 4.66345C3.98222 4.6994 4.07514 4.71791 4.16897 4.71791C4.26281 4.71791 4.35572 4.6994 4.4424 4.66345C4.52907 4.62749 4.6078 4.5748 4.67409 4.50838L7.96271 1.21976C8.23497 0.947498 8.23497 0.488954 7.95554 0.209529Z"
                          fill="currentColor"
                        />
                      </svg>
                    }
                  />
                </li>
                <li>
                  <Button
                    type="button"
                    text="Become a merchant"
                    variant="btn-tertiary"
                    textColor="color-white"
                  />
                </li>
              </ul>
            )}
          </div>
          <div className=" app-container bg-[#3333334e] hover:bg-[#33333399] base:border-[0.5px] border-[0.4px] border-black_300 base:rounded-[7rem] rounded-[3.25rem] base:px-[1rem] px-[0.8rem] base:py-[0.5rem] py-[0.4rem] flex-center base:gap-4 gap-[0.8rem] my-2 mr-2 transition duration-500 cursor-pointer">
            <span className="relative base:w-[1.565rem] w-[1.01rem]">
              <Image
                src="./assets/svgs/Apple-logo.svg"
                alt="apple"
                width={25}
                height={25}
              />
            </span>
            <span className="relative base:w-[1.565rem] w-[1.01rem]">
              <Image
                src="./assets/svgs/Play-store-logo.svg"
                alt="play store"
                width={25}
                height={25}
              />
            </span>
            <div className="flex-center flex-col base:p-4 p-2 base:gap-4 gap-[0.8rem] rounded-[0.25rem] absolute base:top-20 top-[3.5rem] right-2 qr-code bg-white base:w-[8.5rem] w-[6rem]">
              <span className="relative base:w-[6.25rem] base:h-[6.25rem] w-[4.5rem] h-[4.5rem]">
                <Image
                  src="./assets/svgs/qr-code.svg"
                  alt="app qr code"
                  width={100}
                  height={100}
                />
              </span>
              <p className="base:text-[0.875rem] text-[0.65rem] font-[Supreme-Medium] text-center text-black_900">
                Scan QR Code to Download App
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* mobile nav items */}
      <nav
      onClick={toggleNavItems}
        className={` base:hidden absolute -top-6 left-0 w-[65%] h-screen z-[20] p-6 pt-10 bg-blur transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none -translate-x-96"
        }`}>
          <div className="absolute top-6 right-6 text-lg border-[0.15rem] border-purple_900 rounded-full h-8 w-8 flex justify-center items-center"><span className="relative -top-[0.1rem]">x</span></div>
        {user ? (
          <ul
            className="flex items-start mt-12 gap-8 flex-col">
            <li>
              <Button
                type="button"
                text="Find Offers"
                variant="btn-tertiary"
                textColor="color-white"
                icon={
                  <svg
                    className="w-[1.15rem] h-[0.815rem]"
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="Find offers Icon">
                      <path
                        id="Vector"
                        d="M5.95968 10.0669C7.05924 10.0707 8.10162 9.57775 8.79636 8.7255C9.4911 7.87324 9.76382 6.75298 9.53855 5.67674C9.3134 4.60051 8.61426 3.68362 7.63614 3.18147C6.65793 2.67932 5.50534 2.64574 4.49966 3.09009C3.49384 3.53443 2.74256 4.40908 2.45506 5.47039C2.16757 6.53155 2.37457 7.66599 3.0185 8.5571L0.170265 11.4025C0.0234074 11.5493 -0.0338819 11.7632 0.0197772 11.9637C0.0735689 12.1642 0.230146 12.3208 0.430673 12.3746C0.631194 12.4283 0.845054 12.371 0.991918 12.2243L3.84015 9.37603V9.3759C4.45608 9.82413 5.19804 10.0661 5.95967 10.0669L5.95968 10.0669ZM5.95968 3.96968C6.61503 3.97124 7.2429 4.23307 7.70513 4.6975C8.16749 5.16205 8.42631 5.79109 8.42479 6.44644C8.42323 7.10166 8.1614 7.72953 7.69697 8.19189C7.23255 8.65412 6.60338 8.91294 5.94816 8.91142C5.29281 8.90986 4.66494 8.64803 4.20271 8.1836C3.74035 7.71918 3.48152 7.09014 3.48305 6.43479C3.48072 5.77672 3.74073 5.14483 4.20553 4.67898C4.67035 4.21301 5.30157 3.95156 5.95964 3.95236L5.95968 3.96968Z"
                        fill="currentColor"
                      />
                      <path
                        id="Vector_2"
                        d="M2.98913 1.66138H16.8387C17.0463 1.66138 17.238 1.55082 17.3417 1.37103C17.4454 1.19138 17.4454 0.970126 17.3417 0.790345C17.238 0.610693 17.0463 0.5 16.8387 0.5H2.98913C2.78161 0.5 2.58991 0.610693 2.48622 0.790345C2.38252 0.970126 2.38252 1.19139 2.48622 1.37103C2.58991 1.55082 2.78162 1.66138 2.98913 1.66138Z"
                        fill="currentColor"
                      />
                      <path
                        id="Vector_3"
                        d="M16.8389 4.11523H10.817C10.6096 4.11523 10.4179 4.22593 10.3142 4.40558C10.2104 4.58536 10.2104 4.80662 10.3142 4.98627C10.4179 5.16605 10.6096 5.27661 10.817 5.27661H16.8389C17.0464 5.27661 17.2381 5.16605 17.3418 4.98627C17.4455 4.80662 17.4455 4.58536 17.3418 4.40558C17.2381 4.22593 17.0464 4.11523 16.8389 4.11523Z"
                        fill="currentColor"
                      />
                      <path
                        id="Vector_4"
                        d="M16.8389 7.72656H10.817C10.6096 7.72656 10.4179 7.83726 10.3142 8.01691C10.2104 8.19656 10.2104 8.41795 10.3142 8.5976C10.4179 8.77725 10.6096 8.88794 10.817 8.88794H16.8389C17.0464 8.88794 17.2381 8.77725 17.3418 8.5976C17.4455 8.41795 17.4455 8.19656 17.3418 8.01691C17.2381 7.83726 17.0464 7.72656 16.8389 7.72656Z"
                        fill="currentColor"
                      />
                      <path
                        id="Vector_5"
                        d="M16.839 11.3389H5.95983C5.75244 11.3389 5.56075 11.4494 5.45692 11.6292C5.35323 11.8089 5.35323 12.0301 5.45692 12.2099C5.56075 12.3896 5.75245 12.5002 5.95983 12.5002H16.839C17.0465 12.5002 17.2382 12.3896 17.3419 12.2099C17.4456 12.0301 17.4456 11.8089 17.3419 11.6292C17.2382 11.4494 17.0465 11.3389 16.839 11.3389Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                }
              />
            </li>
            <li>
              <Button
                type="button"
                text="Create Offer"
                variant="btn-tertiary"
                textColor="color-white"
                icon={
                  <svg
                    className="w-[1.15rem] h-[0.875rem]"
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.58068 2.66138H15.4303C15.6378 2.66138 15.8295 2.55082 15.9332 2.37103C16.0369 2.19138 16.0369 1.97013 15.9332 1.79034C15.8295 1.61069 15.6378 1.5 15.4303 1.5H1.58068C1.37316 1.5 1.18147 1.61069 1.07777 1.79034C0.974076 1.97013 0.974076 2.19139 1.07777 2.37103C1.18147 2.55082 1.37317 2.66138 1.58068 2.66138Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.4302 5.11523H9.40828C9.20089 5.11523 9.0092 5.22593 8.9055 5.40558C8.80168 5.58536 8.80168 5.80662 8.9055 5.98627C9.0092 6.16605 9.2009 6.27661 9.40828 6.27661H15.4302C15.6377 6.27661 15.8294 6.16605 15.9331 5.98627C16.0368 5.80662 16.0368 5.58536 15.9331 5.40558C15.8294 5.22593 15.6377 5.11523 15.4302 5.11523Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.4302 8.72675H9.40828C9.20089 8.72675 9.0092 8.83744 8.9055 9.01709C8.80168 9.19674 8.80168 9.41813 8.9055 9.59778C9.0092 9.77743 9.2009 9.88813 9.40828 9.88813H15.4302C15.6377 9.88813 15.8294 9.77743 15.9331 9.59778C16.0368 9.41813 16.0368 9.19674 15.9331 9.01709C15.8294 8.83744 15.6377 8.72675 15.4302 8.72675Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.4303 12.3386H4.55114C4.34375 12.3386 4.15206 12.4492 4.04823 12.629C3.94454 12.8086 3.94454 13.0299 4.04823 13.2097C4.15205 13.3893 4.34376 13.5 4.55114 13.5H15.4303C15.6378 13.5 15.8295 13.3893 15.9332 13.2097C16.0369 13.0299 16.0369 12.8086 15.9332 12.629C15.8295 12.4492 15.6378 12.3386 15.4303 12.3386Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4.01938 9.716V7.448H6.28738V6.32H4.01938V4.064H2.89138V6.32H0.635375V7.448H2.89138V9.716H4.01938Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              />
            </li>
            <ul className="flex-center mt-10 gap-6 base:hidden">
              <li>
                <Button
                  type="button"
                  text="Sign in"
                  variant="btn-tertiary"
                  textColor="color-white"
                />
              </li>
              <li>
                <Button
                  type="button"
                  text="Create Account"
                  variant="btn-secondary"
                />
              </li>
            </ul>
          </ul>
        ) : (
          <ul className="flex-center gap-6">
            <li>
              <Button
                type="button"
                text="tertiary"
                variant="btn-tertiary"
                flexDirection="flex-reverse"
                textColor="color-white"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="5"
                    viewBox="0 0 9 5"
                    fill="none">
                    <path
                      d="M7.95554 0.209529C7.88926 0.143109 7.81053 0.0904142 7.72385 0.0544604C7.63718 0.0185067 7.54426 -2.71777e-08 7.45043 -3.12793e-08C7.35659 -3.5381e-08 7.26368 0.0185066 7.177 0.0544604C7.09033 0.0904141 7.0116 0.143109 6.94531 0.209529L4.16539 2.98945L1.38547 0.209529C1.31914 0.143196 1.24039 0.0905784 1.15372 0.0546795C1.06705 0.0187805 0.974164 0.000303064 0.880356 0.000303059C0.786548 0.000303055 0.693657 0.0187805 0.606989 0.0546794C0.520321 0.0905784 0.441573 0.143196 0.37524 0.209529C0.308907 0.275861 0.25629 0.354609 0.220392 0.441277C0.184493 0.527945 0.166016 0.620835 0.166016 0.714643C0.166016 0.808452 0.184493 0.901341 0.220392 0.988009C0.25629 1.07468 0.308907 1.15343 0.37524 1.21976L3.66386 4.50838C3.73014 4.5748 3.80888 4.62749 3.89555 4.66345C3.98222 4.6994 4.07514 4.71791 4.16897 4.71791C4.26281 4.71791 4.35572 4.6994 4.4424 4.66345C4.52907 4.62749 4.6078 4.5748 4.67409 4.50838L7.96271 1.21976C8.23497 0.947498 8.23497 0.488954 7.95554 0.209529Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              />
            </li>
            <li>
              <Button
                type="button"
                text="tertiary"
                variant="btn-tertiary"
                flexDirection="flex-reverse"
                textColor="color-white"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="5"
                    viewBox="0 0 9 5"
                    fill="none">
                    <path
                      d="M7.95554 0.209529C7.88926 0.143109 7.81053 0.0904142 7.72385 0.0544604C7.63718 0.0185067 7.54426 -2.71777e-08 7.45043 -3.12793e-08C7.35659 -3.5381e-08 7.26368 0.0185066 7.177 0.0544604C7.09033 0.0904141 7.0116 0.143109 6.94531 0.209529L4.16539 2.98945L1.38547 0.209529C1.31914 0.143196 1.24039 0.0905784 1.15372 0.0546795C1.06705 0.0187805 0.974164 0.000303064 0.880356 0.000303059C0.786548 0.000303055 0.693657 0.0187805 0.606989 0.0546794C0.520321 0.0905784 0.441573 0.143196 0.37524 0.209529C0.308907 0.275861 0.25629 0.354609 0.220392 0.441277C0.184493 0.527945 0.166016 0.620835 0.166016 0.714643C0.166016 0.808452 0.184493 0.901341 0.220392 0.988009C0.25629 1.07468 0.308907 1.15343 0.37524 1.21976L3.66386 4.50838C3.73014 4.5748 3.80888 4.62749 3.89555 4.66345C3.98222 4.6994 4.07514 4.71791 4.16897 4.71791C4.26281 4.71791 4.35572 4.6994 4.4424 4.66345C4.52907 4.62749 4.6078 4.5748 4.67409 4.50838L7.96271 1.21976C8.23497 0.947498 8.23497 0.488954 7.95554 0.209529Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              />
            </li>
            <li>
              <Button
                type="button"
                text="Become a merchant"
                variant="btn-tertiary"
                textColor="color-white"
              />
            </li>
          </ul>
        )}
      </nav>
    </section>
  );
};
