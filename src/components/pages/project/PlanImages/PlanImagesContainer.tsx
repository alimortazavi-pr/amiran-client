import { PlanImage } from ".";

export const PlanImagesContainer = () => {
  return (
    <div className="grid grid-cols-12 gap-y-16 md:gap-x-5 px-5 mb-16 md:mb-20 lg:mb-24 xl:mb-32">
      {Array.from({ length: 3 }).map((_, index) => (
        <PlanImage key={index} />
      ))}
    </div>
  );
};
