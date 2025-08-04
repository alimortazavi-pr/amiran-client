import { Divider } from "@heroui/react";
import Link from "next/link";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

export const Footer = () => {
  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3">
      <h6 className="font-semibold text-sm lg:text-base xl:text-xl">{t("FOOTER.Footer1")}</h6>
      <Divider orientation="vertical" className="h-6 hidden md:block" />
      <h6 className="font-light text-sm lg:text-base xl:text-xl">{t("FOOTER.Footer2")}</h6>
      <Divider orientation="vertical" className="h-6 hidden md:block" />
      <h6 className="font-light text-sm lg:text-base xl:text-xl underline underline-offset-8">
        <Link href={"https://alimor.ir"} target="_blank">
          {t("FOOTER.Footer3")}
        </Link>
      </h6>
    </div>
  );
};
