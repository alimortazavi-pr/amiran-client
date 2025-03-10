"use client";

import { Button } from "@heroui/react";
import { Map } from "iconsax-react";

export const DirectionsBtn = () => {
  return (
    <div className="flex justify-center">
      <Button
        aria-label="go to directions"
        startContent={<Map className="w-5 h-5" color="white" />}
        className="rounded-full bg-primary/30 text-default-50 w-full max-w-60"
      >
        Get directions
      </Button>
    </div>
  );
};
