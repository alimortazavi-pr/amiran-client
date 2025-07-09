"use client";

import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";
import { FC, useEffect } from "react";

//Interfaces
import { IContactUs } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import {
  setContactUsEditSection,
  setContactUsForm,
} from "@/stores/layouts/actions";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  contactUs: IContactUs;
}
export const DescriptionSection: FC<IProps> = ({ contactUs }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Translation
  const { t, i18n } = useClientTranslation(storage.getLanguage());

  //Life cycle
  useEffect(() => {
    if (contactUs.title || contactUs.description) {
      dispatch(
        setContactUsForm({
          title: contactUs.title || { fa: "", en: "" },
          description: contactUs.description || { fa: "", en: "" },
        })
      );
    }
  }, [contactUs]);

  //Functions
  function selectSection(section: "title" | "description") {
    if (section === "title") {
      dispatch(
        setContactUsEditSection({
          label: "Title",
          value: "title",
        })
      );
    } else {
      dispatch(
        setContactUsEditSection({
          label: "Description",
          value: "description",
        })
      );
    }
  }

  return (
    <div className="flex flex-col gap-5 mb-16 lg:mb-24">
      <div className="relative">
        <h4 className="font-medium text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl">
          {contactUs?.title[(i18n.language as "fa" | "en") || "en"] ||
            t("CONTACT_US.ContactUsDescriptionTitle_Label")}
        </h4>
        {isAuth && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className="absolute bottom-0 start-5 z-10"
            onPress={() => selectSection("title")}
          >
            <Edit className="w-5 h-5" color="#1E353C" />
          </Button>
        )}
      </div>
      <div className="relative">
        <p className="text-justify font-light text-primary/30 md:text-lg xl:text-2xl">
          {contactUs.description[(i18n.language as "fa" | "en") || "en"] ||
            t("CONTACT_US.ContactUsDescription_Label")}
        </p>
        {isAuth && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className="absolute -bottom-8 -start-2 z-10"
            onPress={() => selectSection("description")}
          >
            <Edit className="w-5 h-5" color="#1E353C" />
          </Button>
        )}
      </div>
    </div>
  );
};
