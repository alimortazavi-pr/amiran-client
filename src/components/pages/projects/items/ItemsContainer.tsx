'use client'

import { useMediaQuery } from "react-responsive";

//Components
import { SingleItem } from ".";

export const ItemsContainer = () => {
  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="grid grid-cols-12 gap-y-10 md:gap-y-16 lg:gap-y-20 xl:gap-y-24 gap-x-5">
      {Array.from({ length: isMd ? 15 : 10 }).map((_, index) => (
        <SingleItem key={index} />
      ))}
    </div>
  );
};
