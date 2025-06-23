import { FC } from "react";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { TitleSection } from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { ItemsContainer } from "./items";
import { VideoSectionContainer } from "../home/VideoSection";
import { CreateArticleFAB } from "./create-article";

interface IProps {
  articles: IArticle[];
}
export const ArticlesPage: FC<IProps> = ({ articles }) => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <ItemsContainer articles={articles} />
        <VideoSectionContainer />
        <div className="lg:hidden">
          <RailSpacerContainer />
        </div>
        <BackToPreviousPageBtn />
      </div>
      <CreateArticleFAB />
    </div>
  );
};
