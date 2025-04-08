import Image from "next/image";

//Assets
import logo from "@/assets/svgs/projects/project/project-nav-test.svg";

export const LogoSection = () => {
  return (
    <div className="w-44 md:w-[420px] xl:w-[610px] h-20 md:h-36 lg:h-48 xl:h-64 relative mx-2 md:mx-4">
      <Image src={logo} className="" alt="logo" fill />
    </div>
  );
};
