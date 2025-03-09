import { SingleItem } from ".";

export const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <SingleItem key={index} />
      ))}
    </div>
  );
};
