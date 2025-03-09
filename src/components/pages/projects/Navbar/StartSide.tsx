"use client";

import { Button } from "@heroui/react";
import { Call } from "iconsax-react";

export const StartSide = () => {
  return (
    <div className="flex-1 h-7 lg:h-12 bg-primary/20 rounded-e-full flex items-center justify-start px-2">
      <Button
        isIconOnly
        variant="light"
        size="sm"
        className="rounded-full text-primary max-h-full"
      >
        <Call className="w-3 h-3 lg:w-4 lg:h-4" color="#1D363D" />
      </Button>
    </div>
  );
};
