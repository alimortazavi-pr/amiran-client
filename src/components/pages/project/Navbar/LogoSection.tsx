import Image from "next/image";

//Assets
import logo from "@/assets/svgs/projects/project/project-nav-test.svg";

export const LogoSection = () => {
  return (
    <div className="w-full h-20 md:h-36 lg:h-48 xl:h-64 relative">
      <Image src={logo} className="rounded-full" alt="logo" fill />
    </div>
  );
};
