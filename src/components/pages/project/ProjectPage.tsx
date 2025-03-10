//Components
import { NavbarContainer } from "./Navbar";
import {
  DescriptionSection,
  DirectionsBtn,
  ImagesSection,
  VideoSection,
} from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { PlanImagesContainer } from "./PlanImages";
import { FeaturesContainer } from "./Features";

//Constants
import { PATHS } from "@/common/constants";

export const ProjectPage = () => {
  return (
    <div className="px-3">
      <NavbarContainer />
      <div className="overflow-hidden">
        <ImagesSection />
        <DescriptionSection />
        <VideoSection />
        <PlanImagesContainer />
        <FeaturesContainer />
        <DirectionsBtn />
        <RailSpacerContainer count={3} />
        <BackToPreviousPageBtn
          content="BACK TO PROJECTS"
          previousPath={PATHS.PROJECTS}
        />
      </div>
    </div>
  );
};
