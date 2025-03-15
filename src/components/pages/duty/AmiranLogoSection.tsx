import Image from "next/image";

//Assets
import amiranLogo from "@/assets/svgs/duty/amiran-logo.svg";

export const AmiranLogoSection = () => {
  return (
    <div className="flex justify-center mb-16">
      <div className="relative w-36 h-36">
        <Image src={amiranLogo} alt="amiran-logo" fill />
      </div>
    </div>
  );
};
