import Image from "next/image";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

export const ImageItem = () => {
  return (
    <div className="col-span-4 rounded-full relative h-48 md:col-span-2 md:h-60 lg:h-72 xl:h-96">
      <Image
        fill
        src={fakeImg}
        alt="Image 1"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
};
