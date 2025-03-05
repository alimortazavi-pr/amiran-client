import Image from "next/image";

//Assets
import logo from "@/assets/svgs/services-logo.svg";

export const LogoSection = () => {
  return (
    <div className="relative w-10 h-20 lg:w-20 lg:h-32">
      <Image src={logo} className="rounded-full" alt="logo" fill />
    </div>
  );
};
