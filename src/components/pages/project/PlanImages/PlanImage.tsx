import Image from "next/image";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "@bprogress/next/app";
import { Button } from "@heroui/react";
import { Trash } from "iconsax-react";

//Interfaces
import { IPlanImage } from "@/common/interfaces";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isAuthSelector } from "@/stores/auth/selectors";
import { hardDeleteProjectPlanAction } from "@/stores/projects/actions";

//Constants
import { SERVER_BASE_API_URL } from "@/common/constants";

interface IProps {
  plan: IPlanImage;
}
export const PlanImage: FC<IProps> = ({ plan }) => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Next
  const router = useRouter();

  //States
  const [isLoading, setIsLoading] = useState(false);

  //Functions
  async function deletePlanHandler() {
    setIsLoading(true);
    try {
      await dispatch(hardDeleteProjectPlanAction(plan._id));
      setIsLoading(false);
      toast.success(`Plan has been uploaded`, {
        position: "top-center",
      });
      router.refresh();
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
      });
      setIsLoading(false);
    }
  }

  return (
    <div className="col-span-12 md:col-span-4">
      <div className="w-full aspect-square relative">
        <Image
          src={`${SERVER_BASE_API_URL}${plan.url}`}
          alt={plan.url}
          fill
          className="object-cover object-center"
        />
        {isAuth && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className="absolute -top-5 -start-5 z-10"
            color="danger"
            isLoading={isLoading}
            onPress={deletePlanHandler}
          >
            <Trash className="w-5 h-5" color="red" />
          </Button>
        )}
      </div>
    </div>
  );
};
