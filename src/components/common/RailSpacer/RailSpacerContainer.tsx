"use client";

import { FC } from "react";
import { useMediaQuery } from "react-responsive";

//Components
import { RailSpacer } from ".";

interface IProps {
  count?: number;
  size?: number;
  hasMy?: boolean;
}
export const RailSpacerContainer: FC<IProps> = ({
  count,
  size,
  hasMy = true,
}) => {
  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        hasMy && "my-20 lg:my-44"
      }`}
    >
      {Array.from({ length: count ? count : isMd ? 4 : 3 }).map((_, index) => (
        <RailSpacer key={index} size={size} />
      ))}
    </div>
  );
};
