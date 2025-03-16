//Components
import { NavbarContainer } from "./Navbar";
import { DescriptionSection, TitleSection, VideoSection } from ".";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { FeatureContainer } from "./FeaturesSection";
import { SafetySectionContainer } from "./SafetySection";

export const WhyAmiranPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <DescriptionSection />
        <RailSpacerContainer count={3} />
        <VideoSection />
        <FeatureContainer />
        <SafetySectionContainer />
        <RailSpacerContainer count={3} />
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
