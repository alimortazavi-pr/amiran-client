"use client";

import { FC, useEffect } from "react";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { setForm } from "@/stores/articles/actions";

//Components
import { ContentSection, ImageSection, TitleSection } from ".";
import { EditArticleModal } from "./EditArticle";
import { SettingBtn } from "./Setting";

//Constants
import { NavbarContainer } from "@/components/common/Navbar";

interface IProps {
  article: IArticle;
}
export const ArticlePage: FC<IProps> = ({ article }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Life cycle
  useEffect(() => {
    if (article._id) {
      dispatch(
        setForm({
          title: article.title,
          slug: article.slug,
          description: article.description,
          content: article.content,
        })
      );
    }
  }, [article]);

  return (
    <div className="px-3">
      <NavbarContainer />
      <div className="w-full lg:mt-5">
        <ImageSection article={article} />
        <TitleSection article={article} />
        <ContentSection article={article} />
      </div>
      <EditArticleModal />
      <SettingBtn />
    </div>
  );
};
