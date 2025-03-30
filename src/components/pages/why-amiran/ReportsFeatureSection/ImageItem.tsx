import Image from "next/image";

export const ImageItem = () => {
  return (
    <div className="col-span-4 rounded-full relative h-48 md:col-span-2 md:h-60 lg:h-72 xl:h-96">
      <Image
        fill
        src="https://fakeimg.pl/200x300"
        alt="Image 1"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};
