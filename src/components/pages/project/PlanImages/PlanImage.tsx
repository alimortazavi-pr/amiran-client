import Image from "next/image";
import { FC } from "react";

//Interfaces
import { IPlanImage } from "@/common/interfaces";

//Constants
import { SERVER_BASE_API_URL } from "@/common/constants";

interface IProps {
  plan: IPlanImage;
}
export const PlanImage: FC<IProps> = ({ plan }) => {
  return (
    <div className="col-span-12 md:col-span-4">
      <div className="w-full aspect-square relative">
        <Image
          src={`${SERVER_BASE_API_URL}${plan.url}`}
          alt={plan.url}
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};
