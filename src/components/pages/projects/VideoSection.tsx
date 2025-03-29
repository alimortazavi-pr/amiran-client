import { Play } from "iconsax-react";

//Components
import { RailSpacerHorizontal } from "@/components/common/RailSpacer";

export const VideoSection = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 my-20 md:my-20 lg:my-36 xl:my-48 2xl:my-60 gap-8">
      <div className="flex-auto h-10 items-center hidden lg:flex">
        <RailSpacerHorizontal />
        <RailSpacerHorizontal />
        <RailSpacerHorizontal />
      </div>
      <div className="md:h-52 w-full max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] h-36 lg:h-52 xl:h-72 2xl:h-80 bg-primary/30 flex items-center justify-center rounded-full">
        <Play className="w-10 h-10" variant="Bold" color="white" />
      </div>
      <div className="flex-auto h-10 items-center hidden lg:flex">
        <RailSpacerHorizontal />
        <RailSpacerHorizontal />
        <RailSpacerHorizontal />
      </div>
    </div>
  );
};
