"use client";

import { Button } from "@heroui/react";

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
  function toggleLanguageFunc() {
    if (i18n.language === "en") {
      i18n.changeLanguage("fa");
      dispatch(setLanguageAction("fa"));
    } else {
      i18n.changeLanguage("en");
      dispatch(setLanguageAction("en"));
    }
  }

  return (
    <Button
      color="default"
      variant="light"
      aria-label="Language"
      size="sm"
      // isIconOnly
      className="font-thin text-xs leading-none"
      onPress={toggleLanguageFunc}
    >
      {i18n.language === "en" ? "EN" : "فارسی"}
    </Button>
  );
};
