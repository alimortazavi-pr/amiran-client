import Image from "next/image";

//Assets
import footerLogo from "@/assets/svgs/footer_logo.svg";

export const FooterLogoContainer = () => {
  return (
    <div className="px-4">
      <div className="w-full h-16 flex items-center justify-center relative">
        <Image src={footerLogo} alt="footer logo" fill />
      </div>
    </div>
  );
};
