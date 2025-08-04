"use client";

import { FC } from "react";
import { useMediaQuery } from "react-responsive";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Components
import { ArticleItem } from ".";

interface IProps {
  articles: IArticle[];
}
export const ArticlesContainer: FC<IProps> = ({ articles }) => {
  //Responsive
  const isMd = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="grid grid-cols-12 gap-5 lg:gap-20 xl:gap-28 2xl:gap-24 px-10 2xl:px-0">
      {articles?.slice(0, isMd ? 4 : 2).map((article) => (
        <ArticleItem key={article._id} article={article} />
      ))}
    </div>
  );
};
