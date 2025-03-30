"use client";

import { FC, useMemo } from "react";
import { useMediaQuery } from "react-responsive";

interface IProps {
  index: number;
}
export const ExperiencedItem: FC<IProps> = ({ index }) => {
  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  //LifeCycle
  const isMdCheck = useMemo(() => {
    if (isMd && index < 5) {
      return "rounded-t-full aspect-square";
    } else if (isMd && index > 7) {
      return "rounded-b-full aspect-square";
    } else if (!isMd && index < 3) {
      return "rounded-t-full aspect-square";
    } else if (!isMd && index > 9) {
      return "rounded-b-full aspect-square";
    } else {
      return "aspect-square md:aspect-auto md:h-full";
    }
  }, [isMd, index]);

  return (
    <div className="col-span-1 ">
      <div className={`w-full bg-primary/20 ${isMdCheck}`}></div>
    </div>
  );
};
