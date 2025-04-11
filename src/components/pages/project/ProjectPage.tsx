//Components
import { NavbarContainer } from "./Navbar";
import {
  DescriptionSection,
  DirectionsBtn,
  ImagesSection,
} from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { PlanImagesContainer } from "./PlanImages";
import { FeaturesContainer } from "./Features";

//Constants
import { PATHS } from "@/common/constants";
import { VideoSectionContainer } from "../home/VideoSection";

export const ProjectPage = () => {
  return (
    <div className="px-3">
      <NavbarContainer />
      <div className="overflow-hidden">
        <div className="md:flex items-start">
          <ImagesSection />
          <DescriptionSection />
        </div>
        <VideoSectionContainer />
        <PlanImagesContainer />
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
