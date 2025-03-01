import serviceOneSVG from "@/assets/svgs/services/service_1.svg";
import Image from "next/image";

export const ItemOne = () => {
  return (
    <div className="col-span-12">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-20 h-20">
          <Image src={serviceOneSVG} alt="service one" fill />
        </div>
        <span className="text-primary/20 text-[10px] border p-1 border-primary/20 rounded-full">
          Participation in construction
        </span>
      </div>
    </div>
  );
};
