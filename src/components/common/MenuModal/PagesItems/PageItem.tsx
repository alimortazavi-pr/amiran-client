import { Button } from "@heroui/react";
import { FC, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";

//Enums
import { menuPagesEnum } from "@/common/enums";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { setIsOpenMenu } from "@/stores/layouts/actions";

//Assets
import projectsIcon from "@/assets/svgs/menu/projects-icon.svg";
import servicesIcon from "@/assets/svgs/menu/services-icon.svg";
import dutyIcon from "@/assets/svgs/menu/duty-icon.svg";
import workProcessIcon from "@/assets/svgs/menu/works-in-process-icon.svg";
import whyAmiranIcon from "@/assets/svgs/menu/why-amiran-icon.svg";
import contactUsIcon from "@/assets/svgs/menu/contact-us-icon.svg";

//Constants
import { PATHS } from "@/common/constants";

interface IProps {
  type: menuPagesEnum;
}
export const PageItem: FC<IProps> = ({ type }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Next
  const router = useRouter();

  //Life cycle
  const { title, icon, path } = useMemo(() => {
    switch (type) {
      case menuPagesEnum.PROJECTS:
        return {
          title: "Projects",
          icon: projectsIcon,
          path: PATHS.PROJECTS,
        };
      case menuPagesEnum.SERVICES:
        return {
          title: "Services",
          icon: servicesIcon,
          path: PATHS.SERVICES,
        };
      case menuPagesEnum.DUTY:
        return {
          title: "Duty",
          icon: dutyIcon,
          path: PATHS.DUTY,
        };
      case menuPagesEnum.WORK_PROCESS:
        return {
          title: "Work Process",
          icon: workProcessIcon,
          path: PATHS.WORK_PROCESS,
        };
      case menuPagesEnum.WHY_AMIRAN:
        return {
          title: "Why Amiran",
          icon: whyAmiranIcon,
          path: PATHS.WHY_AMIRAN,
        };
      case menuPagesEnum.CONTACT_US:
        return {
          title: "Contact Us",
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
      className="flex flex-col items-center p-0 min-w-0 min-h-0 w-auto h-auto rounded-sm"
      variant="light"
      onPress={onClickHandler}
    >
      <div className="w-20 h-20 relative">
        <Image src={icon} alt={title} fill />
      </div>
      <span className="text-primary/40 text-xs">{title}</span>
    </Button>
  );
};
