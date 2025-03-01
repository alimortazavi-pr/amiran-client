import serviceFourSVG from "@/assets/svgs/services/service_4.svg";
import Image from "next/image";

export const ItemFour = () => {
  return (
    <div className="col-span-12">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-20 h-20">
          <Image src={serviceFourSVG} alt="service four" fill />
        </div>
        <span className="text-primary/20 text-[10px] border p-1 border-primary/20 rounded-full">
          Participation in construction
        </span>
      </div>
    </div>
  );
};
