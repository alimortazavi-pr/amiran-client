import { PlanImage } from ".";

export const PlanImagesContainer = () => {
  return (
    <div className="grid grid-cols-12 gap-y-16 px-5 mb-16">
      {Array.from({ length: 3 }).map((_, index) => (
        <PlanImage key={index} />
      ))}
    </div>
  );
};
