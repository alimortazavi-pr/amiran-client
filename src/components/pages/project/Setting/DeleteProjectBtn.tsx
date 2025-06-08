import { useRouter } from "@bprogress/next/app";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";

//Redux
import { useAppDispatch } from "@/stores/hooks";
import { softDeleteProjectAction } from "@/stores/projects/actions";

//Constants
import { PATHS } from "@/common/constants";

export const DeleteProjectBtn = () => {
  //Redux
  const dispatch = useAppDispatch();

  //Next
  const router = useRouter();
  const params = useParams();

  //States
  const [isLoading, setIsLoading] = useState(false);

  //Functions
  async function deleteProjectHandler() {
    setIsLoading(true);
    try {
      await dispatch(softDeleteProjectAction(params.slug as string));
      setIsLoading(false);
      toast.success(`The project has been deleted`, {
        position: "top-center",
      });
      router.push(PATHS.PROJECTS);
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
      });
      setIsLoading(false);
    }
  }

  return (
    <Popover showArrow backdrop="opaque" placement="bottom">
      <PopoverTrigger>
        <Button color="danger" variant="flat">
          Delete Project
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2">
        <div className="text-start w-full mb-2 p-2">
          <span className="font-medium mb-0 text-start">
            Are you sure you want to delete this project?
          </span>
        </div>
        <div className="flex items-center justify-end w-full gap-1">
          <Button
            color="default"
            variant="light"
            size="sm"
            isLoading={isLoading}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            color="danger"
            variant="light"
            size="sm"
            onPress={deleteProjectHandler}
            isLoading={isLoading}
            className="flex-1"
          >
            Yes
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
