//Components
import { NavbarContainer } from "./Navbar";
import { DescriptionSection, TitleSection, VideoSection } from ".";
import { ItemsContainer } from "./items";

export const ServicesPage = () => {
  return (
    <div>
      <NavbarContainer />
      <div className="px-4 overflow-hidden">
        <TitleSection />
        <DescriptionSection />
        <VideoSection />
        <ItemsContainer />
      </div>
    </div>
  );
};
