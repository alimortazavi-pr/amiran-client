"use client";

import { FC } from "react";
import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";

//Interfaces
import { ITeam } from "@/common/interfaces";

//Redux
import { setSelectedTeam } from "@/stores/duty/actions";
import { isAuthSelector } from "@/stores/auth/selectors";

//Assets
import fakeImg from "@/assets/svgs/fake-img.svg";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import Image from "next/image";
import { SERVER_BASE_API_URL } from "@/common/constants";

interface IProps {
  team: ITeam;
}
export const TeamItem: FC<IProps> = ({ team }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Translation
  const { t, i18n } = useClientTranslation(storage.getLanguage());

  //Functions
  function selectSection() {
    dispatch(setSelectedTeam(team));
  }

  return (
    <div className="col-span-12 md:col-span-6 relative">
      <div className="flex gap-3 md:gap-6">
        <div className="flex-1 flex flex-col gap-1 mt-8 truncate">
          <div className="md:flex items-center justify-start gap-x-1">
            <h6 className={`text-lg font-bold`}>
              {team.firstName[(i18n.language as "fa" | "en") || "en"] ||
                t("DUTY.TEAM.TeamItem1Name_Label")}
            </h6>
            <h6
              className={`text-lg font-bold ${
                i18n.language === "en" &&
                "tracking-[14px] md:tracking-normal lg:tracking-[15px]"
              }`}
            >
              {team.lastName[(i18n.language as "fa" | "en") || "en"] ||
                t("DUTY.TEAM.TeamItem1Family_Label")}
            </h6>
          </div>
          <p className="text-primary/30 text-sm text-justify md:text-lg font-light line-clamp-6 whitespace-pre-line">
            {team.description[(i18n.language as "fa" | "en") || "en"] ||
              t("DUTY.TEAM.TeamItem1Description_Label")}
          </p>
        </div>
        <div className="flex-1 md:max-w-44 h-60 md:h-72 rounded-full relative">
          {team.image ? (
            <Image
              src={`${SERVER_BASE_API_URL}${team.image}`}
              alt={`${team.firstName}-${team.lastName}`}
              fill
              className="object-cover object-center rounded-full"
            />
          ) : (
            <Image
              src={fakeImg}
              alt={`${team.firstName}-${team.lastName}`}
              fill
              className="object-cover rounded-full"
            />
          )}
        </div>
      </div>
      {isAuth && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          className="absolute start-8 bottom-0 z-10"
          onPress={selectSection}
        >
          <Edit className="w-5 h-5" color="#1E353C" />
        </Button>
      )}
    </div>
  );
};
