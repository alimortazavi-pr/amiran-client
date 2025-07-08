"use client";

import { FC } from "react";
import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import { setEditSection } from "@/stores/articles/actions";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  article: IArticle;
}
export const TitleSection: FC<IProps> = ({ article }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Translation
  const { t, i18n } = useClientTranslation(storage.getLanguage());

  //Functions
  function selectSection() {
    dispatch(
      setEditSection({
        label: "Title",
        value: "title",
      })
    );
  }

  return (
    <div className="relative">
      <h4 className="font-bold text-primary text-xl md:text-3xl xl:text-4xl mb-2">
        {article.title[i18n.language as "fa" | "en"] || t("COMMON.Lorem_Label")}
      </h4>
      {isAuth && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          className="absolute -left-8 top-1 z-10"
          onPress={selectSection}
        >
          <Edit className="w-5 h-5" color="#1E353C" />
        </Button>
      )}
    </div>
  );
};
