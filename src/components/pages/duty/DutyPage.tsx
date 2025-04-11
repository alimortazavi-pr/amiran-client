//Components
import { NavbarContainer } from "@/components/common/Navbar";
import {
  AmiranLogoSection,
  ChartSection,
  Description3Section,
  Description2Section,
  DescriptionSection,
  TitleSection,
} from ".";
import { TeamContainer } from "./TeamSection";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";
import { ExperiencedSectionContainer } from "./ExperiencedSection";
import { VideoSectionContainer } from "../home/VideoSection";

export const DutyPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <div className="hidden md:block">
          <AmiranLogoSection />
        </div>
        <DescriptionSection />
        <RailSpacerContainer />
        <div className="md:hidden">
          <AmiranLogoSection />
        </div>
        <ChartSection />
        <Description2Section />
        <RailSpacerContainer />
        <ExperiencedSectionContainer />
        <Description3Section />
        <TeamContainer />
        <VideoSectionContainer />
        <RailSpacerContainer />
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
