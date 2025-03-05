"use client";

import { Button } from "@heroui/react";
import { HambergerMenu, SearchNormal } from "iconsax-react";

export const EndSide = () => {
  return (
    <div className="flex-1 h-7 lg:h-12 bg-primary/20 rounded-s-full flex items-center justify-end gap-1 px-2">
      <Button
        isIconOnly
        variant="light"
        size="sm"
        className="rounded-full text-primary max-h-full"
      >
        <SearchNormal className="w-3 h-3 lg:w-4 lg:h-4" color="#1D363D" />
      </Button>
      <Button
        isIconOnly
        variant="light"
        size="sm"
        className="rounded-full text-primary max-h-full"
      >
        <HambergerMenu className="w-4 h-4 lg:w-5 lg:h-5" color="#1D363D" />
      </Button>
    </div>
  );
};
