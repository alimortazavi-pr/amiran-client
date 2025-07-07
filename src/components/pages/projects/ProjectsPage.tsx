import { FC } from "react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { TitleSection } from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { ItemsContainer } from "./items";
import { CreateProjectFAB } from "./create-project";

interface IProps {
  projects: IProject[];
}
export const ProjectsPage: FC<IProps> = ({ projects }) => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <ItemsContainer projects={projects} />
        <RailSpacerContainer />
        <BackToPreviousPageBtn />
      </div>
      <CreateProjectFAB />
    </div>
  );
};
