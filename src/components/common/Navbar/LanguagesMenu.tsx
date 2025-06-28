"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { LanguageCircle } from "iconsax-react";

//Interfaces
import { languagesType } from "@/common/types";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { setLanguageAction } from "@/stores/layouts/actions";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const LanguagesMenu = () => {
  //Redux
  const dispatch = useAppDispatch();

  //Translation
  const { i18n } = useClientTranslation(storage.getLanguage());

  //Functions
  function changeLanguageFunc(language: languagesType) {
    i18n.changeLanguage(language);
    dispatch(setLanguageAction(language));
  }

  return (
    <Dropdown placement="bottom-start" showArrow>
      <DropdownTrigger>
        <Button
          isIconOnly
          color="default"
          variant="flat"
          aria-label="Language"
          size="sm"
          className="rounded-full text-primary max-h-full"
        >
          <LanguageCircle className="w-3 h-3 lg:w-4 lg:h-4" color="#1E353C" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          key="English"
          startContent={
            <LanguageCircle className="w-3 h-3 lg:w-4 lg:h-4" color="#1E353C" />
          }
          className=""
          onPress={() => changeLanguageFunc("en")}
        >
          English
        </DropdownItem>
        <DropdownItem
          key="Persian"
          startContent={
            <LanguageCircle className="w-3 h-3 lg:w-4 lg:h-4" color="#1E353C" />
          }
          onPress={() => changeLanguageFunc("fa")}
        >
          فارسی
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
