//Components
import { PagesItems } from "./PagesItems";
import { SocialMediaItemsContainer } from "./SocialMediaItems";
import { RailSpacerContainer } from "../RailSpacer";

export const MenuContainer = () => {
  return (
    <div className="w-full h-full bg-background flex flex-col justify-between pt-24">
      <div className="flex flex-col px-16 gap-8">
        <PagesItems />
        <SocialMediaItemsContainer />
      </div>
      <div className="p-10 flex items-end justify-center gap-x-1 opacity-75">
        <RailSpacerContainer count={6} size={28} hasMy={false} />
        <RailSpacerContainer count={10} size={28} hasMy={false} />
        <RailSpacerContainer count={8} size={28} hasMy={false} />
        <RailSpacerContainer count={12} size={28} hasMy={false} />
        <RailSpacerContainer count={9} size={28} hasMy={false} />
        <RailSpacerContainer count={4} size={28} hasMy={false} />
        <RailSpacerContainer count={10} size={28} hasMy={false} />
        <RailSpacerContainer count={12} size={28} hasMy={false} />
        <RailSpacerContainer count={7} size={28} hasMy={false} />
        <RailSpacerContainer count={11} size={28} hasMy={false} />
      </div>
    </div>
  );
};
