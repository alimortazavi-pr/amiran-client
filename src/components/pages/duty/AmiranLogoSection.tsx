import Image from "next/image";

//Assets
import amiranLogo from "@/assets/svgs/duty/amiran-logo.svg";

export const AmiranLogoSection = () => {
  return (
    <div className="flex justify-center mb-16 md:mb-20 lg:mb-32 xl:mb-44">
      <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60">
        <Image src={amiranLogo} alt="amiran-logo" fill />
      </div>
    </div>
  );
};
