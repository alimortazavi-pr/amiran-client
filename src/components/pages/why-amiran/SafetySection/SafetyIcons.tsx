import Image from "next/image";

//Assets
import safetyIcons from "@/assets/svgs/why-amiran/safety-icons.svg";

export const SafetyIcons = () => {
  return (
    <div className="relative w-[60%] h-56">
      <Image src={safetyIcons} fill alt="safety items" />
    </div>
  );
};
