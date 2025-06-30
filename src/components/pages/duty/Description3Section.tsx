"use client";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const Description3Section = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="flex flex-col gap-5 mb-32">
      <h4 className="font-medium text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl">
        {t("DUTY.DutyDescriptionTitle3_Label")}
      </h4>
      <p className="text-justify font-light text-primary/30 md:text-lg xl:text-xl">
        {t("DUTY.DutyDescription3_Label")}
      </p>
    </div>
  );
};
