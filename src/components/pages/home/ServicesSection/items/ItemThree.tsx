import serviceThreeSVG from "@/assets/svgs/services/service_3.svg";
import Image from "next/image";

export const ItemThree = () => {
  return (
    <div className="col-span-12">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-20 h-20">
          <Image src={serviceThreeSVG} alt="service three" fill />
        </div>
        <span className="text-primary/20 text-[10px] border p-1 border-primary/20 rounded-full">
          Participation in construction
        </span>
      </div>
    </div>
  );
};
