"use client";

import { FC } from "react";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Components
import { SingleItem } from ".";

interface IProps {
  articles: IArticle[];
}
export const ItemsContainer: FC<IProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      {articles?.map((article) => (
        <SingleItem key={article._id} article={article} />
      ))}
    </div>
  );
};
