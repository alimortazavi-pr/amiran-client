//Components
import { NavbarContainer } from "./Navbar";
import { DescriptionSection, ImagesSection, VideoSection } from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { PlanImagesContainer } from "./PlanImages";

export const ProjectPage = () => {
  return (
    <div className="px-3">
      <NavbarContainer />
      <div className="overflow-hidden">
        <ImagesSection />
        <DescriptionSection />
        <VideoSection />
        <PlanImagesContainer />
        <RailSpacerContainer count={3} />
        <BackToPreviousPageBtn content="BACK TO PROJECTS" />
      </div>
    </div>
  );
};
