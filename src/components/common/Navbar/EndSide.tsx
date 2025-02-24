"use client";

import { Button } from "@heroui/react";
import { HambergerMenu, SearchNormal } from "iconsax-react";

export const EndSide = () => {
  return (
    <div className="flex-1 h-10 bg-primary/30 rounded-s-full flex items-center justify-end gap-1 px-2">
      <Button
        isIconOnly
        variant="light"
        size="sm"
        className="rounded-full text-primary"
      >
        <SearchNormal className="w-4 h-4" color="#1D363D" />
      </Button>
      <Button
        isIconOnly
        variant="light"
        size="sm"
        className="rounded-full text-primary"
      >
        <HambergerMenu className="w-5 h-5" color="#1D363D" />
      </Button>
    </div>
  );
};
