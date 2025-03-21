import Image from "next/image";

export const ImageItem = () => {
  return (
    <div className="col-span-4 rounded-full relative h-48">
      <Image
        fill
        src="https://fakeimg.pl/200x300"
        alt="Image 1"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};
