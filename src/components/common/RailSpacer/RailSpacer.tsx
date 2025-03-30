import { FC } from "react";
import Image from "next/image";

//Assets
import railSpacer from "@/assets/svgs/rail.svg";

interface IProps {
  size?: number;
}
export const RailSpacer: FC<IProps> = ({ size }) => {
  return (
    <div
      className={`${!size && "w-12 h-12 lg:w-16 lg:h-16"} relative opacity-50`}
      style={{ width: size, height: size }}
    >
      <Image src={railSpacer} alt="rail-spacer" fill />
    </div>
  );
};
