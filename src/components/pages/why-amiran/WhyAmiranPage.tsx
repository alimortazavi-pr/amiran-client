//Components
import { NavbarContainer } from "@/components/common/Navbar";
import {
  DescriptionSection,
  FeatureDescription,
  TitleSection,
  ImageSection,
} from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { FeatureContainer } from "./FeaturesSection";
import { SafetySectionContainer } from "./SafetySection";
import { UpToDateFeatureSectionContainer } from "./UpToDateFeatureSection";
import { ReportsFeatureSectionContainer } from "./ReportsFeatureSection";
import { CompletedProjectsContainer } from "./CompletedProjects";

export const WhyAmiranPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <DescriptionSection />
        <RailSpacerContainer />
        <ImageSection />
        <FeatureContainer />
        <SafetySectionContainer />
        <UpToDateFeatureSectionContainer />
        <ReportsFeatureSectionContainer />
        <FeatureDescription />
        <RailSpacerContainer />
        <CompletedProjectsContainer />
        <RailSpacerContainer />
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
