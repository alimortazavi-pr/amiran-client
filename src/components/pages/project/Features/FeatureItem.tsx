import { FC } from "react";

interface IProps {
  title: string;
  content: string;
}
export const FeatureItem: FC<IProps> = ({ title, content }) => {
  return (
    <div className="col-span-12 md:col-span-6">
      <div className="flex flex-col items-center justify-center lg:gap-y-1">
        <h6 className="text-primary/30 font-semibold uppercase md:text-lg lg:text-xl xl:text-2xl">{title}</h6>
        <div className="rounded-full px-2 py-1 bg-primary/30 text-default-50 w-60 flex items-center justify-center tracking-wide truncate md:w-full md:text-lg lg:text-xl xl:text-2xl lg:py-1.5 xl:py-2">
          <span className="truncate uppercase">{content}</span>
        </div>
      </div>
    </div>
  );
};
