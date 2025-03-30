"use client";

import { useMediaQuery } from "react-responsive";

//Components
import { ImageItem } from ".";

export const ImagesSection = () => {
  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="grid grid-cols-12 md:grid-cols-10 gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10">
      {isMd
        ? Array.from({ length: 5 }, (_, index) => <ImageItem key={index} />)
        : Array.from({ length: 3 }, (_, index) => <ImageItem key={index} />)}
    </div>
  );
};
