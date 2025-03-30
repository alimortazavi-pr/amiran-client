//Components

import { ImagesSection, DescriptionSection } from ".";

export const HeroSectionContainer = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 items-center md:gap-5">
      <h6 className="text-lg font-light text-center my-10 flex-1 lg:my-20 xl:my-24 md:col-span-12 md:text-xl md:tracking-[5px] lg:text-2xl lg:tracking-[8px] xl:text-3xl xl:tracking-[10px]">
        WE ARE WAITING FOR YOU AT THE TOP
      </h6>
      <ImagesSection />
      <DescriptionSection />
    </div>
  );
};
