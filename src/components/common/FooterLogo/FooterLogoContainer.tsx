"use client";

import { useMediaQuery } from "react-responsive";
import Image from "next/image";

//Assets
import footerLogo from "@/assets/svgs/footer_logo.svg";
//Components
import { RailSpacer } from "../RailSpacer";

export const FooterLogoContainer = () => {
  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isXl = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <div className="px-4 flex items-center justify-center">
      {Array.from({ length: isLg ? 6 : 4 }).map((_, index) => (
        <div className="rotate-90" key={index}>
          <RailSpacer size={isXl ? 65 : isMd ? 50 : 20} />
        </div>
      ))}
      <div className="w-full h-16 md:h-40 flex items-center justify-center relative mx-2 lg:mx-4">
        <Image src={footerLogo} alt="footer logo" fill />
      </div>
      {Array.from({ length: isLg ? 6 : 4 }).map((_, index) => (
        <div className="rotate-90" key={index}>
          <RailSpacer size={isXl ? 65 : isMd ? 50 : 20} />
        </div>
      ))}
    </div>
  );
};
