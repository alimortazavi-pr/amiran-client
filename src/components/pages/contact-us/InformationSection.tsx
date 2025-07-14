"use client";

import Image from "next/image";
import { FC } from "react";

//Interfaces
import { IContactUs } from "@/common/interfaces";

//Redux
import { useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";

//Components
import { RailSpacerContainer } from "@/components/common/RailSpacer";

//Assets
import footerLogo from "@/assets/svgs/footer_logo.svg";

//Translation
import {
  useClientTranslation,
  useConvertNumbersFormat,
} from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";
import { Edit } from "iconsax-react";
import { Button, useDisclosure } from "@heroui/react";
import { EditContactUsModal } from "./EditContactUsModal";

interface IProps {
  contactUs: IContactUs;
}
export const InformationSection: FC<IProps> = ({ contactUs }) => {
  //Redux
  const isAuth = useAppSelector(isAuthSelector);

  //NextUI
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  //Translation
  const { t, i18n } = useClientTranslation(storage.getLanguage());
  const convertNumbersFormat = useConvertNumbersFormat();

  return (
    <div className="flex flex-col items-center mb-16 relative">
      <div className="w-[120px] h-16 relative">
        <Image src={footerLogo} alt="footer logo" fill />
      </div>
      <div className="absolute top-[170]">
        <div className="w-[280px] h-[450px] relative bg-primary rounded-full flex flex-col items-center justify-between gap-4 px-10 py-20">
          <p className="whitespace-pre-line text-primary-50 text-center font-extralight text-lg">
            {contactUs.instagram[(i18n.language as "fa" | "en") || "en"] ||
              t("CONTACT_US.ContactUsInstagram_Label")}
          </p>
          <p className="whitespace-pre-line text-primary-50 text-center font-extralight text-lg">
            {convertNumbersFormat(
              contactUs.address[(i18n.language as "fa" | "en") || "en"] ||
                t("CONTACT_US.ContactUsAddress_Label")
            )}
          </p>
          <p
            className="whitespace-pre-line text-primary-50 text-center font-extralight text-lg"
            dir="ltr"
          >
            {convertNumbersFormat(
              contactUs.phones[(i18n.language as "fa" | "en") || "en"] ||
                t("CONTACT_US.ContactUsPhones_Label")
            )}
          </p>
          {isAuth && (
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="absolute bottom-0 start-5 z-10"
              onPress={onOpen}
            >
              <Edit className="w-5 h-5" color="#1E353C" />
            </Button>
          )}
        </div>
      </div>
      <RailSpacerContainer count={8} size={120} hasMy={false} />
      <EditContactUsModal
        contactUs={contactUs}
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};
