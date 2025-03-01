import { ItemOne, ItemTwo, ItemThree, ItemFour, ItemFive, ItemSix } from ".";

export const ItemsContainer = () => {
  return (
    <div className="col-span-7">
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
