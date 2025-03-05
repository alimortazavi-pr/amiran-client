import serviceOneSVG from "@/assets/svgs/services/service_1.svg";
import Image from "next/image";

export const ItemOne = () => {
  return (
    <div className="col-span-12 lg:col-span-6">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-40 h-40 lg:w-40 lg:h-40 xl:w-52 xl:h-52 2xl:w-64 2xl:h-64">
          <Image src={serviceOneSVG} alt="service one" fill />
        </div>
        <span className="text-center text-primary/20 text-lg lg:text-lg xl:text-xl 2xl:text-2xl border px-3 p-1 w-full lg:p-2 xl:px-3 2xl:px-4 border-primary/20 rounded-full">
          Participation in construction
        </span>
      </div>
    </div>
  );
};
