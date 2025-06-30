"use client";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const ItemOne = () => {
  //Translation
  const { t, i18n } = useClientTranslation(storage.getLanguage());

  return (
    <div className="col-span-12 md:col-span-6">
      <div className="flex gap-3 md:gap-6">
        <div className="flex-1 flex flex-col gap-1 mt-8">
          <div className="md:flex items-center justify-between">
            <h6
              className={`text-lg font-bold ${
                i18n.language === "en" &&
                "tracking-[23px] md:tracking-normal lg:tracking-[15px]"
              }`}
            >
              {t("DUTY.TEAM.TeamItem1Name1_Label")}
              <span className="!tracking-normal">
                {t("DUTY.TEAM.TeamItem1Name2_Label")}
              </span>
            </h6>
            <h6 className="hidden md:block">-</h6>
            <h6 className={`text-lg font-bold ${i18n.language === "en" && "tracking-[14px] md:tracking-normal lg:tracking-[15px]"}`}>
              {t("DUTY.TEAM.TeamItem1Family1_Label")}
              <span className="!tracking-normal">
                {t("DUTY.TEAM.TeamItem1Family2_Label")}
              </span>
            </h6>
          </div>
          <p className="text-primary/30 text-sm text-justify md:text-lg font-light">
            <span className="font-bold text-primary">
              {t("DUTY.TEAM.TeamItem1Position_Label")}
            </span>{" "}
            {t("DUTY.TEAM.TeamItem1Description_Label")}
          </p>
        </div>
        <div className="flex-1 md:max-w-44 h-60 md:h-72 bg-primary/30 rounded-full"></div>
      </div>
    </div>
  );
};
