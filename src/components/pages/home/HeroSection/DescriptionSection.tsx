//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const DescriptionSection = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="flex-1 flex flex-col items-center md:col-span-4 max-w-[326px] md:max-w-max md:ps-10">
      <h6 className="text-sm font-semibold text-center mb-5 border-primary max-w-fit px-2 md:px-0 md:text-[11px] lg:text-[15px] xl:text-xl">
        {t("HOME.HeroDescriptionTitle_Label")}
      </h6>
      <p className="text-primary/40 text-xs text-justify px-4 md:px-0 w-full font-light md:line-clamp-[12] lg:line-clamp-[14] xl:line-clamp-[16] lg:text-base xl:text-lg">
        {t("HOME.HeroDescription_Label")}
      </p>
    </div>
  );
};
