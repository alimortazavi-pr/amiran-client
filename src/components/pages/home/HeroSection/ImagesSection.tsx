import Image from "next/image";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

export const ImagesSection = () => {
  return (
    <div className="md:md:col-span-5 mb-12 md:mb-0 w-full max-w-[326px] md:max-w-full">
      <div className="flex-1 grid grid-cols-3 grid-rows-10 gap-2 xl:gap-3 w-full h-60 px-8 md:px-0 lg:h-96 xl:h-[500px]">
        <div className="col-span-1 row-span-4 rounded-full overflow-hidden relative">
          <Image
            fill
            src={fakeImg}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-5 rounded-full overflow-hidden relative">
          <Image
            fill
            src={fakeImg}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-10 rounded-full overflow-hidden relative">
          <Image
            fill
            src={fakeImg}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-6 rounded-full overflow-hidden relative">
          <Image
            fill
            src={fakeImg}
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2 rounded-full overflow-hidden relative">
          <Image
            fill
            src={fakeImg}
            alt="Image 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-3 rounded-full overflow-hidden relative">
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
