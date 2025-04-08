"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

//Assets
import contactUsImg from "@/assets/svgs/contact-us/contact-us.svg";
import contactUsDesktopImg from "@/assets/svgs/contact-us/contact-us-desktop.svg";

export const ImageSection = () => {
  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="flex justify-center mb-16">
      <div className="relative w-full h-[1250px]">
        <Image
          src={isMd ? contactUsDesktopImg : contactUsImg}
          className=""
          alt="logo"
          fill
        />
      </div>
    </div>
  );
};
