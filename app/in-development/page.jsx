import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" w-auto h-screen bg-white flex-center">
     <Image src="/assets/images/giphy.webp" alt="in progess" width={1000} height={1000} className="base:w-[45%] w-[70%] h-auto" />
    </div>
  );
};

export default page;
