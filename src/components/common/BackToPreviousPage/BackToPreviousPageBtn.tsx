"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next-nprogress-bar";
import { FC } from "react";

interface IProps {
  content?: string;
}
export const BackToPreviousPageBtn: FC<IProps> = ({
  content = "BACK TO HOME",
}) => {
  //Next
  const router = useRouter();

  //Functions
  function backToHomeHandler() {
    router.push("/");
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
