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

interface IProps {
  article: IArticle;
}
export const ContentSection: FC<IProps> = ({ article }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Functions
  function selectSection() {
    dispatch(
      setEditSection({
        label: "Content",
        value: "content",
      })
    );
  }

  return (
    <div className="relative">
      <p className="text-justify font-light text-primary/70 md:text-lg xl:text-xl">
        {article.content}
      </p>
      {isAuth && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          className="absolute -bottom-2 right-2 z-10"
          onPress={selectSection}
        >
          <Edit className="w-5 h-5" color="#1E353C" />
        </Button>
      )}
    </div>
  );
};
