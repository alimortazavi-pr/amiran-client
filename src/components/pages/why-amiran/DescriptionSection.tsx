"use client";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const DescriptionSection = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-medium text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl">
        {t("WHY_AMIRAN.WhyAmiranDescriptionTitle_Label")}
      </h4>
      <p className="text-justify font-light text-primary/30 md:text-lg xl:text-xl">
        {t("WHY_AMIRAN.WhyAmiranDescription_Label")}
      </p>
    </div>
  );
};
