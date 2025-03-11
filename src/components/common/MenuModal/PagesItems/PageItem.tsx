import { Button } from "@heroui/react";
import { FC, useMemo } from "react";
import Image from "next/image";

//Enums
import { menuPagesEnum } from "@/common/enums";

//Assets
import projectsIcon from "@/assets/svgs/menu/projects-icon.svg";
import servicesIcon from "@/assets/svgs/menu/services-icon.svg";
import tasksIcon from "@/assets/svgs/menu/tasks-icon.svg";
import workProcessIcon from "@/assets/svgs/menu/works-in-process-icon.svg";
import whyAmiranIcon from "@/assets/svgs/menu/why-amiran-icon.svg";
import contactUsIcon from "@/assets/svgs/menu/contact-us-icon.svg";

interface IProps {
  type: menuPagesEnum;
}
export const PageItem: FC<IProps> = ({ type }) => {
  //Life cycle
  const { title, icon } = useMemo(() => {
    switch (type) {
      case menuPagesEnum.PROJECTS:
        return {
          title: "Projects",
          icon: projectsIcon,
        };
      case menuPagesEnum.SERVICES:
        return {
          title: "Services",
          icon: servicesIcon,
        };
      case menuPagesEnum.TASKS:
        return {
          title: "Tasks",
          icon: tasksIcon,
        };
      case menuPagesEnum.WORK_PROCESS:
        return {
          title: "Work Process",
          icon: workProcessIcon,
        };
      case menuPagesEnum.WHY_AMIRAN:
        return {
          title: "Why Amiran",
          icon: whyAmiranIcon,
        };
      case menuPagesEnum.CONTACT_US:
        return {
          title: "Contact Us",
          icon: contactUsIcon,
        };
      default:
        return {
          title: "",
          icon: "",
        };
    }
  }, [type]);

  return (
    <Button
      className="flex flex-col items-center p-0 min-w-0 min-h-0 w-auto h-auto"
      variant="light"
    >
      <div className="w-20 h-20 relative">
        <Image src={icon} alt={title} fill />
      </div>
      <span className="text-primary/40 text-xs">{title}</span>
    </Button>
  );
};
