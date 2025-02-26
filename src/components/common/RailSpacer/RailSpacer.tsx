import Image from "next/image";

//Assets
import railSpacer from "@/assets/svgs/rail.svg";

export const RailSpacer = () => {
  return (
    <div className="w-12 h-12 lg:w-60 lg:h-60 relative">
      <Image src={railSpacer} alt="rail-spacer" fill />
    </div>
  );
};
