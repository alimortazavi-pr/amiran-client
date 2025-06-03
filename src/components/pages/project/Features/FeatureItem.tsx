import { FC } from "react";
import { Button } from "@heroui/react";
import { Edit } from "iconsax-react";

//Interfaces
import { IProjectForm } from "@/common/interfaces";

//Redux
import { isAuthSelector } from "@/stores/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { setEditSection } from "@/stores/projects/actions";

interface IProps {
  title: string;
  content: string;
  value: keyof IProjectForm;
}
export const FeatureItem: FC<IProps> = ({ title, content, value }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Functions
  function selectSection() {
    dispatch(
      setEditSection({
        label: title,
        value: value,
      })
    );
  }

  return (
    <div className="col-span-12 md:col-span-6 relative">
      <div className="flex flex-col items-center justify-center lg:gap-y-1">
        <h6 className="text-primary/30 font-semibold uppercase md:text-lg lg:text-xl xl:text-2xl">
          {title}
        </h6>
        <div className="rounded-full px-2 py-1 bg-primary/30 text-default-50 w-60 flex items-center justify-center tracking-wide truncate md:w-full md:text-lg lg:text-xl xl:text-2xl lg:py-1.5 xl:py-2">
          <span className="truncate uppercase">{content}</span>
        </div>
      </div>
      {isAuth && (
        <Button
          isIconOnly
          size="sm"
          variant="light"
          className="absolute -bottom-2 right-2 z-10"
          onPress={selectSection}
        >
          <Edit className="w-5 h-5" color="#1E353C" />
        </Button>
      )}
    </div>
  );
};
