//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const Description = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="col-span-3 overflow-hidden hidden md:block">
      <div className="text-justify font-light text-primary/80 md:line-clamp-[5] lg:line-clamp-[7] xl:line-clamp-[9] 2xl:line-clamp-[11]">
        {t("HOME.EXPERIENCED.ExperiencedDescription_Label")}
      </div>
    </div>
  );
};
