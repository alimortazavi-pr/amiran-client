//Components

import { ImagesSection, DescriptionSection, SloganSection } from ".";

export const HeroSectionContainer = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 items-center md:mt-14 lg:mt-36">
      <h6 className="text-lg font-light text-center my-10 flex-1 md:hidden">
        WE ARE WAITING FOR YOU AT THE TOP
      </h6>
      <SloganSection />
      <ImagesSection />
      <DescriptionSection />
    </div>
  );
};
