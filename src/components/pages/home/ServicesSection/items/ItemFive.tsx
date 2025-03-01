import serviceFiveSVG from "@/assets/svgs/services/service_5.svg";
import Image from "next/image";

export const ItemFive = () => {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-20 h-20 lg:w-40 lg:h-40 xl:w-52 xl:h-52 2xl:w-64 2xl:h-64">
          <Image src={serviceFiveSVG} alt="service five" fill />
        </div>
        <span className="text-primary/20 text-[10px] lg:text-lg xl:text-xl 2xl:text-2xl border p-1 lg:p-2 xl:px-3 2xl:px-4 border-primary/20 rounded-full">
          Participation in construction
        </span>
      </div>
    </div>
  );
};
