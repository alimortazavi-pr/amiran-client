import { FC } from "react";

//Components
import { RailSpacer } from ".";

interface IProps {
  count?: number;
}
export const RailSpacerContainer: FC<IProps> = ({ count = 4 }) => {
  return (
    <div className="flex flex-col items-center justify-center my-20 lg:my-44">
      {Array.from({ length: count }).map((_, index) => (
        <RailSpacer key={index} />
      ))}
    </div>
  );
};
