import { FC } from "react";

//Components
import { RailSpacer } from ".";

interface IProps {
  count?: number;
  size?: number;
  hasMy?: boolean;
}
export const RailSpacerContainer: FC<IProps> = ({
  count = 4,
  size,
  hasMy = true,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        hasMy && "my-20 lg:my-44"
      }`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <RailSpacer key={index} size={size} />
      ))}
    </div>
  );
};
