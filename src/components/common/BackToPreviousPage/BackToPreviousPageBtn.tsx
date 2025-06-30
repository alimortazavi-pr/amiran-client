"use client";

import { Button } from "@heroui/react";
import { useRouter } from "@bprogress/next/app";

import { FC } from "react";

//Constants
import { PATHS } from "@/common/constants";

//Translation
import { useClientTranslation } from "@/hooks/translation";

//Utils
import { storage } from "@/common/utils";

interface IProps {
  content?: string;
  previousPath?: string;
}
export const BackToPreviousPageBtn: FC<IProps> = ({
  content = "COMMON.BackToHome_Label",
  previousPath = PATHS.HOME,
}) => {
  //Next
  const router = useRouter();

  //Translation
  const { t } = useClientTranslation(storage.getLanguage());

  //Functions
  function backToHomeHandler() {
    router.push(previousPath);
  }

  return (
    <div className="flex items-center justify-center">
      <Button
        variant="light"
        onPress={backToHomeHandler}
      >
        {t(content)}
      </Button>
    </div>
  );
};
