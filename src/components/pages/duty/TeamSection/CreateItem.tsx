"use client";

import { Button } from "@heroui/react";
import { Add } from "iconsax-react";
import { useState } from "react";
import { useRouter } from "@bprogress/next/app";
import { toast } from "react-toastify";

//Redux
import { isAuthSelector } from "@/stores/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { createTeamAction } from "@/stores/duty/actions";

export const CreateItem = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Next
  const router = useRouter();

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Functions
  async function createTeam() {
    setIsLoading(true);
    try {
      await dispatch(createTeamAction());
      setIsLoading(false);
      toast.success("Member has been uploaded", {
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
    isAuth && (
      <div className="col-span-12 md:col-span-6">
        <div className="w-full aspect-video flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100">
          <Button
            isIconOnly
            size="lg"
            isLoading={isLoading}
            onPress={createTeam}
          >
            <Add className="w-8 h-8" color="#1E353C" />
          </Button>
        </div>
      </div>
    )
  );
};
