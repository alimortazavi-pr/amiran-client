import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from ".";

export const ItemsContainer = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-y-14">
        <ItemOne />
        <ItemTwo />
        <ItemThree />
        <ItemFour />
        <ItemFive />
        <ItemSix />
      </div>
    </div>
  );
};
