//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const Description = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="col-span-5 md:col-span-4">
      <div className="font-light text-justify text-sm lg:text-xl text-primary/30 leading-[23px] lg:leading-[30px] xl:leading-[40px] 2xl:leading-[50px] line-clamp-[40] md:line-clamp-[19] lg:line-clamp-[25] xl:line-clamp-[22] 2xl:line-clamp-[21]">
        {t("HOME.SERVICES.ServicesDescription_Label")}
      </div>
    </div>
  );
};
