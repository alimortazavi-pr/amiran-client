//Components
import { NavbarContainer } from "@/components/common/Navbar";
import { ImagesSection, DescriptionSection } from "./HeroSection";

export const HomePage = () => {
  return (
    <div>
      <NavbarContainer />
      <h6 className="text-xl font-normal text-center my-12">
        WE ARE WAITING FOR YOU AT THE TOP
      </h6>
      <ImagesSection />
      <DescriptionSection />
    </div>
  );
};
