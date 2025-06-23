//Enums
import { menuPagesEnum } from "@/common/enums";

//Components
import { PageItem } from ".";

export const PagesItems = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex items-center justify-between gap-3">
        <PageItem type={menuPagesEnum.PROJECTS} />
        <PageItem type={menuPagesEnum.SERVICES} />
        <PageItem type={menuPagesEnum.DUTY} />
      </div>
      <div className="flex items-center justify-between gap-3">
        <PageItem type={menuPagesEnum.BLOG} />
        <PageItem type={menuPagesEnum.WHY_AMIRAN} />
        <PageItem type={menuPagesEnum.CONTACT_US} />
      </div>
    </div>
  );
};
