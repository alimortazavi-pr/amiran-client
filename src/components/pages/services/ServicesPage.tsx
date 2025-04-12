//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { DescriptionSection, TitleSection, VideoSection } from ".";
import { ItemsContainer } from "./items";
import { RailSpacerContainer } from "@/components/common/RailSpacer";
import { BackToPreviousPageBtn } from "@/components/common/BackToPreviousPage";

export const ServicesPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <div className="lg:flex lg:gap-10 lg:my-36 xl:my-48 2xl:my-60">
          <DescriptionSection />
          <VideoSection />
        </div>
        <ItemsContainer />
        <RailSpacerContainer />
        <BackToPreviousPageBtn />
      </div>
    </div>
  );
};
