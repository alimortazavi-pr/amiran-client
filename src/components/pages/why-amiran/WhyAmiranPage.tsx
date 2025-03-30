//Components
import { NavbarContainer } from "./Navbar";
import {
  DescriptionSection,
  FeatureDescription,
  TitleSection,
  VideoSection,
} from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { FeatureContainer } from "./FeaturesSection";
import { SafetySectionContainer } from "./SafetySection";
import { UpToDateFeatureSectionContainer } from "./UpToDateFeatureSection";
import { ReportsFeatureSectionContainer } from "./ReportsFeatureSection";

export const WhyAmiranPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <DescriptionSection />
        <RailSpacerContainer />
        <VideoSection />
        <FeatureContainer />
        <SafetySectionContainer />
        <UpToDateFeatureSectionContainer />
        <ReportsFeatureSectionContainer />
        <FeatureDescription />
        <RailSpacerContainer />
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
