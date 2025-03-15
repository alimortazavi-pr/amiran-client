//Components
import { NavbarContainer } from "./Navbar";
import {
  AmiranLogoSection,
  ChartSection,
  Description3Section,
  Description2Section,
  DescriptionSection,
  TitleSection,
  VideoSection,
} from ".";
import { TeamContainer } from "./TeamSection";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { ExperiencedSectionContainer } from "./ExperiencedSection";

export const DutyPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <DescriptionSection />
        <RailSpacerContainer count={3} />
        <AmiranLogoSection />
        <ChartSection />
        <Description2Section />
        <RailSpacerContainer count={3} />
        <ExperiencedSectionContainer />
        <Description3Section />
        <TeamContainer />
        <VideoSection />
        <RailSpacerContainer count={3} />
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
