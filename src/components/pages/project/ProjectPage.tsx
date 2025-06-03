import { FC } from "react";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { NavbarContainer } from "./Navbar";
import { DescriptionSection, DirectionsBtn, ImagesSection } from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { PlanImagesContainer } from "./PlanImages";
import { FeaturesContainer } from "./Features";
import { VideoSectionContainer } from "../home/VideoSection";

//Constants
import { PATHS } from "@/common/constants";

interface IProps {
  project: IProject;
}
export const ProjectPage: FC<IProps> = ({ project }) => {
  return (
    <div className="px-3">
      <NavbarContainer project={project} />
      <div className="overflow-hidden">
        <div className="md:flex items-start">
          <ImagesSection project={project} />
          <DescriptionSection />
        </div>
        <VideoSectionContainer />
        <PlanImagesContainer project={project} />
        <FeaturesContainer />
        <DirectionsBtn />
        <div className="md:hidden">
          <RailSpacerContainer />
        </div>
        <div className="md:mt-32">
          <BackToPreviousPageBtn
            content="BACK TO PROJECTS"
            previousPath={PATHS.PROJECTS}
          />
        </div>
      </div>
    </div>
  );
};
