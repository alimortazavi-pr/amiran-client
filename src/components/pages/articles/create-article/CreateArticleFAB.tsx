"use client";

import { Button } from "@heroui/react";
import { Add } from "iconsax-react";
import { useState } from "react";
import { useRouter } from "@bprogress/next/app";
import { toast } from "react-toastify";

//Redux
import { isAuthSelector } from "@/stores/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { createArticleAction } from "@/stores/articles/actions";

export const CreateArticleFAB = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);

  //Next
  const router = useRouter();

  //States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //Functions
  async function createArticle() {
    setIsLoading(true);
    try {
      await dispatch(createArticleAction());
      setIsLoading(false);
      toast.success("article has been created", {
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
      <Button
        isIconOnly
        className="fixed bottom-4 start-5"
        size="lg"
        color="primary"
        isLoading={isLoading}
        onPress={createArticle}
      >
        <Add className="w-5 h-5" color="white" />
      </Button>
    )
  );
};
