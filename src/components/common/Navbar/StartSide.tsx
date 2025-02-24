"use client";

import { Button } from "@heroui/react";
import { Call } from "iconsax-react";

export const StartSide = () => {
  return (
    <div className="flex-1 h-10 bg-primary/30 rounded-e-full flex items-center justify-start gap-1 px-2">
      <Button
        isIconOnly
        variant="light"
        size="sm"
        className="rounded-full text-primary"
      >
        <Call className="w-4 h-4" color="#1D363D" />
      </Button>
    </div>
  );
};
