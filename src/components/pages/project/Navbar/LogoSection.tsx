import Image from "next/image";

//Assets
import logo from "@/assets/svgs/projects/project/project-nav-test.svg";

export const LogoSection = () => {
  return (
    <div className="w-full h-20 lg:h-32 relative">
      <Image src={logo} className="rounded-full" alt="logo" fill />
    </div>
  );
};
