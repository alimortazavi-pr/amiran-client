import Image from "next/image";

//Assets
import railSpacer from "@/assets/svgs/rail.svg";

export const RailSpacerHorizontal = () => {
  return (
    <div className="w-14 h-14 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 relative rotate-90">
      <Image src={railSpacer} alt="rail-spacer" fill />
    </div>
  );
};
