//Components

import { ImagesSection, DescriptionSection } from ".";

export const HeroSectionContainer = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 items-center lg:gap-5 lg:mt-16">
      <h6 className="text-xl lg:text-7xl font-normal lg:font-light text-center my-12 lg:my-0 flex-1 lg:col-span-3 lg:text-start lg:leading-[90px]">
        WE ARE WAITING FOR YOU AT THE TOP
      </h6>
      <ImagesSection />
      <DescriptionSection />
    </div>
  );
};
