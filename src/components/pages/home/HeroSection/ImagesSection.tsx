import Image from "next/image";

export const ImagesSection = () => {
  return (
    <div className="lg:col-span-5 mb-12 lg:mb-0 w-full max-w-[326px] lg:max-w-full">
      <div className="flex-1 grid grid-cols-3 grid-rows-4 gap-2 w-full h-60 lg:h-[500px] px-8">
        <div className="col-span-1 row-span-1 rounded-full overflow-hidden relative">
          <Image
            fill
            src="https://fakeimg.pl/200x300"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2 rounded-full overflow-hidden relative">
          <Image
            fill
            src="https://fakeimg.pl/200x300"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-4 rounded-full overflow-hidden relative">
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
