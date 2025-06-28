import { Button } from "@heroui/react";
import { FC, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "@bprogress/next/app";

//Enums
import { menuPagesEnum } from "@/common/enums";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { setIsOpenMenu } from "@/stores/layouts/actions";

//Assets
import projectsIcon from "@/assets/svgs/menu/projects-icon.svg";
import servicesIcon from "@/assets/svgs/menu/services-icon.svg";
import dutyIcon from "@/assets/svgs/menu/duty-icon.svg";
import blogIcon from "@/assets/svgs/menu/blog-icon.svg";
import whyAmiranIcon from "@/assets/svgs/menu/why-amiran-icon.svg";
import contactUsIcon from "@/assets/svgs/menu/contact-us-icon.svg";

//Constants
import { PATHS } from "@/common/constants";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  type: menuPagesEnum;
}
export const PageItem: FC<IProps> = ({ type }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Next
  const router = useRouter();

  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  //Life cycle
  const { title, icon, path } = useMemo(() => {
    switch (type) {
      case menuPagesEnum.PROJECTS:
        return {
          title: "MENU.ProjectsItem_Label",
          icon: projectsIcon,
          path: PATHS.PROJECTS,
        };
      case menuPagesEnum.SERVICES:
        return {
          title: "MENU.ServicesItem_Label",
          icon: servicesIcon,
          path: PATHS.SERVICES,
        };
      case menuPagesEnum.DUTY:
        return {
          title: "MENU.DutyItem_Label",
          icon: dutyIcon,
          path: PATHS.DUTY,
        };
      case menuPagesEnum.BLOG:
        return {
          title: "MENU.BlogItem_Label",
          icon: blogIcon,
          path: PATHS.ARTICLES,
        };
      case menuPagesEnum.WHY_AMIRAN:
        return {
          title: "MENU.WhyAmiranItem_Label",
          icon: whyAmiranIcon,
          path: PATHS.WHY_AMIRAN,
        };
      case menuPagesEnum.CONTACT_US:
        return {
          title: "MENU.ContactUsItem_Label",
          icon: contactUsIcon,
          path: PATHS.CONTACT_US,
        };
      default:
        return {
          title: "",
          icon: "",
          path: "",
        };
    }
  }, [type]);

  //Functions
  function onClickHandler() {
    router.push(path);
    dispatch(setIsOpenMenu(false));
  }

  return (
    <Button
      className="flex flex-col items-center p-0 min-w-0 min-h-0 w-auto h-auto rounded-sm hover:opacity-80"
      variant="light"
      onPress={onClickHandler}
      data-hover={false}
    >
      <div className="w-20 h-20 relative">
        <Image src={icon} alt={t(title)} fill />
      </div>
      <span className="text-primary/40 text-xs">{t(title)}</span>
    </Button>
  );
};
