//Components
import { NavbarContainer } from "./Navbar";
import {
  AmiranLogoSection,
  DescriptionSection,
  TitleSection,
  VideoSection,
} from ".";
import { ItemsContainer } from "./items";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";

export const DutyPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <DescriptionSection />
        <RailSpacerContainer count={3} />
        <AmiranLogoSection />
        <VideoSection />
        <ItemsContainer />
        <RailSpacerContainer count={3} />
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
