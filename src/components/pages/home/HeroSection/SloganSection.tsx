//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const SloganSection = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="hidden md:flex flex-col justify-between items-start h-full gap-2 md:col-span-3 md:text-3xl lg:text-5xl xl:text-6xl font-light py-3">
      <div>{t("HOME.HeroSloganLine1_Label")}</div>
      <div>{t("HOME.HeroSloganLine2_Label")}</div>
      <div>{t("HOME.HeroSloganLine3_Label")}</div>
      <div>{t("HOME.HeroSloganLine4_Label")}</div>
      <div>{t("HOME.HeroSloganLine5_Label")}</div>
    </div>
  );
};
