import Image from "next/image";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

export const TradeAdministrativeProjects2 = () => {
  return (
    <div className="col-span-12 md:col-span-6">
      <h6 className="font-bold uppercase mb-4 lg:mb-7 xl:mb-10 text-lg md:text-xl lg:text-2xl xl:text-4xl">
        TRADE ADMINISTRATIVE
      </h6>
      <div className="flex-1 grid grid-cols-10 grid-rows-3 gap-2 xl:gap-3 w-full h-64 md:h-80 lg:h-96 xl:h-[500px]">
        <div className="col-span-10 row-span-1 rounded-full overflow-hidden relative">
          <Image
            fill
            src={fakeImg}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-5 row-span-1 rounded-full overflow-hidden relative">
          <Image
            fill
            src={fakeImg}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-1 rounded-full overflow-hidden relative">
          <Image
            fill
            src={fakeImg}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-3 row-span-1 rounded-full overflow-hidden relative">
          <Image
            fill
            src={fakeImg}
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-4 row-span-1 rounded-full overflow-hidden relative">
          <Image
            fill
            src={fakeImg}
            alt="Image 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-6 row-span-1 rounded-full overflow-hidden relative">
          <Image
            fill
            src={fakeImg}
            alt="Image 6"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
