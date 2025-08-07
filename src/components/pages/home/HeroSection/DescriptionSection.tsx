import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";
import { FC, useEffect } from "react";

//Interfaces
import { IHome } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import { setHeroEditSection, setHeroForm } from "@/stores/home/actions";

//Utils
import { storage } from "@/common/utils";

//Translation
import { useClientTranslation } from "@/hooks/translation";

interface IProps {
  home: IHome;
}
export const DescriptionSection: FC<IProps> = ({ home }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Translation
  const { t, i18n } = useClientTranslation(storage.getLanguage());

  //Life cycle
  useEffect(() => {
    if (home.heroTitle || home.heroDescription) {
      dispatch(
        setHeroForm({
          heroTitle: home.heroTitle,
          heroDescription: home.heroDescription,
        })
      );
    }
  }, [home]);

  //Functions
  function selectSection(section: "heroTitle" | "heroDescription") {
    if (section === "heroTitle") {
      dispatch(
        setHeroEditSection({
          label: "Title",
          value: "heroTitle",
        })
      );
    } else {
      dispatch(
        setHeroEditSection({
          label: "Description",
          value: "heroDescription",
        })
      );
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center md:col-span-4 max-w-[326px] md:max-w-max md:ps-10">
      <div className="relative">
        <h6 className="text-sm font-semibold text-center mb-5 border-primary max-w-fit px-2 md:px-0 md:text-[11px] lg:text-[15px] xl:text-xl rtl:text-base">
          {home.heroTitle[(i18n.language as "fa" | "en") || "en"] ||
            t("HOME.HeroDescriptionTitle_Label")}
        </h6>
        {isAuth && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className="absolute bottom-0 -start-5 z-10"
            onPress={() => selectSection("heroTitle")}
          >
            <Edit className="w-5 h-5" color="#1E353C" />
          </Button>
        )}
      </div>
      <div className="relative">
        <p className="text-primary/40 text-sm text-justify px-4 md:px-0 w-full font-light md:line-clamp-[12] lg:line-clamp-[14] xl:line-clamp-[16] lg:text-base xl:text-lg">
          {home.heroDescription[(i18n.language as "fa" | "en") || "en"] ||
            t("HOME.HeroDescription_Label")}
        </p>
        {isAuth && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className="absolute -bottom-8 -start-2 z-10"
            onPress={() => selectSection("heroDescription")}
          >
            <Edit className="w-5 h-5" color="#1E353C" />
          </Button>
        )}
      </div>
    </div>
  );
};
