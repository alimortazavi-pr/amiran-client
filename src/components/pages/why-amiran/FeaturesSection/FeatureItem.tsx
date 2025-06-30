"use client";

import { FC } from "react";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  content: string;
}
export const FeatureItem: FC<IProps> = ({ content }) => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <li className="flex items-center gap-2 xl:gap-3">
      <div className="h-10 min-w-2 md:h-12 md:min-w-3 xl:h-14 xl:min-w-4 bg-primary rounded-full"></div>
      <h6 className="text-primary text-sm font-medium min-h-10 flex items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        {t(content)}
      </h6>
    </li>
  );
};
