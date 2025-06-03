"use client";

import { Button } from "@heroui/react";
import { Add } from "iconsax-react";
import { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "@bprogress/next/app";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";

//Redux
import { isAuthSelector } from "@/stores/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { uploadProjectPlansAction } from "@/stores/projects/actions";

export const CreatePlanImage = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Next
  const router = useRouter();
  const params = useParams();

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Refs
  const fileInputRef = useRef<HTMLInputElement>(null);

  //Functions
  function createPlan() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e?.target?.files) {
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("plan", e?.target?.files[0]);
        await dispatch(
          uploadProjectPlansAction(params.slug as string, formData)
        );
        setIsLoading(false);
        toast.success("Plan has been uploaded", {
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
  }

  return (
    isAuth && (
      <div className="col-span-12 md:col-span-4">
        <div
          className="w-full aspect-square flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100"
          onClick={createPlan}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
          <Button
            isIconOnly
            size="lg"
            isLoading={isLoading}
            onPress={createPlan}
          >
            <Add className="w-8 h-8" color="#1E353C" />
          </Button>
        </div>
      </div>
    )
  );
};
