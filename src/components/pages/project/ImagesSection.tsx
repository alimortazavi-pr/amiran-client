import Image from "next/image";

export const ImagesSection = () => {
  return (
    <div className="w-full md:w-auto flex-1 mb-16 md:mb-0">
      <div className="flex-1 grid grid-cols-3 grid-rows-5 gap-2 w-full h-64 px-5 md:h-96 xl:h-[500px]">
        <div className="col-span-1 row-span-2 rounded-full overflow-hidden relative">
          <Image
            fill
            src="https://fakeimg.pl/200x300"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-3 rounded-full overflow-hidden relative">
          <Image
            fill
            src="https://fakeimg.pl/200x300"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-5 rounded-full overflow-hidden relative">
          <Image
            fill
            src="https://fakeimg.pl/200x300"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-3 rounded-full overflow-hidden relative">
          <Image
            fill
            src="https://fakeimg.pl/200x300"
            alt="Image 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 rounded-full overflow-hidden relative">
          <Image
            fill
            src="https://fakeimg.pl/200x300"
            alt="Image 5"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 rounded-full overflow-hidden relative">
          <Image
            fill
            src="https://fakeimg.pl/200x300"
            alt="Image 6"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
