import Image from "next/image";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

export const PlanImage = () => {
  return (
    <div className="col-span-12 md:col-span-4">
      <div className="w-full aspect-square relative">
        <Image
          src={fakeImg}
          alt="text plan"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};
