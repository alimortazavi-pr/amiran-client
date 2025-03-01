import { Play } from "iconsax-react";

export const VideoSectionContainer = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 my-14">
      <div className="w-full h-36 bg-primary/30 flex items-center justify-center rounded-full">
        <Play className="w-10 h-10" variant="Bold" color="white" />
      </div>
    </div>
  );
};
