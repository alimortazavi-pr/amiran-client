import { FC } from "react";

interface IProps {
  title: string;
  content: string;
}
export const FeatureItem: FC<IProps> = ({ title, content }) => {
  return (
    <div className="col-span-12">
      <div className="flex flex-col items-center justify-center">
        <h6 className="text-primary/30 font-semibold uppercase">{title}</h6>
        <div className="rounded-full px-2 py-1 bg-primary/30 text-default-50 w-60 flex items-center justify-center tracking-wide truncate">
          <span className="truncate uppercase">{content}</span>
        </div>
      </div>
    </div>
  );
};
