"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next-nprogress-bar";
import { FC } from "react";

//Constants
import { PATHS } from "@/common/constants";

interface IProps {
  content?: string;
  previousPath?: string;
}
export const BackToPreviousPageBtn: FC<IProps> = ({
  content = "BACK TO HOME",
  previousPath = PATHS.HOME,
}) => {
  //Next
  const router = useRouter();

  //Functions
  function backToHomeHandler() {
    router.push(previousPath);
  }

  return (
    <div className="flex items-center justify-center">
      <Button
        variant="light"
        onPress={backToHomeHandler}
        className="tracking-[5px]"
      >
        {content}
      </Button>
    </div>
  );
};
