"use client";

import { FC } from "react";

//Interfaces
import { IHome } from "@/common/interfaces";

//Components
import { ImagesSection, DescriptionSection, SloganSection } from ".";
import { EditHeroModal } from "./EditHero";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  home: IHome;
}
export const HeroSectionContainer: FC<IProps> = ({ home }) => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 items-center md:mt-14 lg:mt-36">
      <h6 className="text-lg font-light text-center my-10 flex-1 md:hidden">
        {t("HOME.HeroSlogan_Label")}
      </h6>
      <SloganSection />
      <ImagesSection />
      <DescriptionSection home={home} />
      <EditHeroModal />
    </div>
  );
};
