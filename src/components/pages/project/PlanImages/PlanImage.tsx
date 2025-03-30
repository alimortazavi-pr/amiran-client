import Image from "next/image";

export const PlanImage = () => {
  return (
    <div className="col-span-12 md:col-span-4">
      <div className="w-full aspect-square relative">
        <Image
          src={"https://fakeimg.pl/500x500"}
          alt="text plan"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};
