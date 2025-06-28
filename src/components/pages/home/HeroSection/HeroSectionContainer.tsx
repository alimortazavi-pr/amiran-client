'use client';

//Components
import { ImagesSection, DescriptionSection, SloganSection } from ".";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const HeroSectionContainer = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 items-center md:mt-14 lg:mt-36">
      <h6 className="text-lg font-light text-center my-10 flex-1 md:hidden">
        {t("HOME.HeroSlogan_Label")}
      </h6>
      <SloganSection />
      <ImagesSection />
      <DescriptionSection />
    </div>
  );
};
