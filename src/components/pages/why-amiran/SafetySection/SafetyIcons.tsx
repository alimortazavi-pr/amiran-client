import Image from "next/image";

//Assets
import safetyIcons from "@/assets/svgs/why-amiran/safety-icons.svg";

export const SafetyIcons = () => {
  return (
    <div className="relative w-[60%] md:w-[40%] h-56 md:h-96 lg:h-[450px] xl:h-[540px] 2xl:h-[600px]">
      <Image src={safetyIcons} fill alt="safety items" />
    </div>
  );
};
