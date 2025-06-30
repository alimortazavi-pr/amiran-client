"use client";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const FeatureDescription = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <p className="text-sm text-primary/40 font-light text-justify md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl md:leading-7 lg:leading-8 xl:leading-10 2xl:leading-[50px]">
      {t("WHY_AMIRAN.WhyAmiranFeatureDescription_Label")}
    </p>
  );
};
