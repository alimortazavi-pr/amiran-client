import { FC} from "react";
import { Switch } from "@heroui/react";
import { useRouter } from "@bprogress/next/app";

//Interfaces
import { IProject } from "@/common/interfaces";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { has4ImagesToggle } from "@/stores/projects/actions";

interface IProps {
  project: IProject;
}
export const ImagesCountSwitch: FC<IProps> = ({ project }) => {
  //Redux
  const dispatch = useAppDispatch();

  //Next
  const router = useRouter();

  //Functions
  async function onValueChangeHandler() {
    dispatch(has4ImagesToggle(project.slug));
    router.refresh();
  }

  return (
    <div className="flex justify-center">
      <Switch
        isSelected={project.has4Images}
        onValueChange={onValueChangeHandler}
      >
        {project.has4Images ? "4 Images" : "6 Images"}
      </Switch>
    </div>
  );
};
