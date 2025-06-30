"use client";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const SafetyDescription = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="max-w-[40%] md:max-w-[60%] flex flex-col gap-1">
      <h4 className="font-bold text-6xl text-center md:text-end truncate md:text-7xl lg:text-8xl xl:text-9xl text-primary">
        HSE
      </h4>
      <p className="text-justify font-light text-primary/30 line-clamp-6 md:line-clamp-[12] lg:line-clamp-[14] 2xl:line-clamp-[16] xl:text-lg">
        {t("WHY_AMIRAN.WhyAmiranHSEDescription_Label")}
      </p>
    </div>
  );
};
