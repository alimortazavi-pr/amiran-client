import { ItemOne, ItemTwo, ItemThree, ItemFour } from ".";

export const TeamContainer = () => {
  return (
    <div className="w-full mb-36">
      <div className="grid grid-cols-12 gap-y-16">
        <ItemOne />
        <ItemTwo />
        <ItemThree />
        <ItemFour />
      </div>
    </div>
  );
};
