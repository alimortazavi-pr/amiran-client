"use client";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const TitleSection = () => {
  //Translation
  const { t, i18n } = useClientTranslation(storage.getLanguage());

  return (
    <div className="mt-10 mb-14 md:mb-20 lg:mb-32 xl:mb-44 md:mt-14 lg:mt-20 xl:mt-32">
      <h1
        className={`uppercase text-2xl font-extralight text-center md:text-3xl lg:text-4xl xl:text-5xl ${
          i18n.language === "fa"
            ? ""
            : "tracking-[25px] md:tracking-[76px] lg:tracking-[100px] xl:tracking-[130px]"
        }`}
      >
        {t("HOME.PROJECTS.ProjectTitle1_Label")}
        <span className="!tracking-[0rem]">
          {t("HOME.PROJECTS.ProjectTitle2_Label")}
        </span>
      </h1>
    </div>
  );
};
