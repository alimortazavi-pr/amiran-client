"use client";

import Image from "next/image";

//Assets
import contactUsImg from "@/assets/svgs/contact-us/contact-us.svg";

export const ImageSection = () => {
  return (
    <div className="flex justify-center mb-16">
      <div className="relative w-full h-[1250px]">
        <Image src={contactUsImg} className="" alt="logo" fill />
      </div>
    </div>
  );
};
