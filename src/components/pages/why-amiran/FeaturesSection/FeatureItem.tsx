import { FC } from "react";

interface IProps {
  content: string;
}
export const FeatureItem: FC<IProps> = ({ content }) => {
  return (
    <li className="ps-2 border-s-5 border-primary text-sm font-medium min-h-10 flex items-center md:text-base lg:text-lg xl:text-2xl 2xl:text-4xl">
      {content}
    </li>
  );
};
