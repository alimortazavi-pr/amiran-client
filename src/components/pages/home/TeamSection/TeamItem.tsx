"use client";

import { FC, useMemo } from "react";
import { useMediaQuery } from "react-responsive";

interface IProps {
  index: number;
}
export const TeamItem: FC<IProps> = ({ index }) => {
  //Responsive
  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  //LifeCycle
  const isLgCheck = useMemo(() => {
    if (isLg && index < 5) {
      return "rounded-t-full";
    } else if (isLg && index > 7) {
      return "rounded-b-full";
    } else if (!isLg && index < 3) {
      return "rounded-t-full";
    } else if (!isLg && index > 9) {
      return "rounded-b-full";
    }
  }, [isLg, index]);

  return (
    <div className="col-span-1 aspect-square">
      <div className={`w-full h-full bg-primary/20 ${isLgCheck}`}></div>
    </div>
  );
};
