"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next-nprogress-bar";

export const BackToHomeBtn = () => {
  //Next
  const router = useRouter();

  //Functions
  function backToHomeHandler() {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center">
      <Button variant="light" onPress={backToHomeHandler} className="tracking-[5px]">
        BACK TO HOME
      </Button>
    </div>
  );
};
