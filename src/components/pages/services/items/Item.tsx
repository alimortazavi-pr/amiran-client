import { FC } from "react";
import Image from "next/image";

interface IProps {
  image: string;
  content: string;
}
export const Item: FC<IProps> = ({ content, image }) => {
  return (
    <div className="col-span-12 md:col-span-6">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-40 h-40 lg:w-40 lg:h-40 xl:w-52 xl:h-52 2xl:w-64 2xl:h-64">
          <Image src={image} alt="service one" fill />
        </div>
        <span className="text-center text-primary/20 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl border px-3 p-1 w-full lg:p-2 xl:px-3 2xl:px-4 border-primary/20 rounded-full">
          {content}
        </span>
      </div>
    </div>
  );
};
