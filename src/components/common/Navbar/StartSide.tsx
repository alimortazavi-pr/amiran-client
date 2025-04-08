"use client";

import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "@bprogress/next/app";
import { motion } from "motion/react";

//Redux
import { useAppSelector } from "@/stores/hooks";
import { isOpenSearchSelector } from "@/stores/layouts/selectors";

//Assets
import { ArrowLeft2, Call } from "iconsax-react";

//Constants
import { PATHS } from "@/common/constants";

export const StartSide = () => {
  //Redux
  const isOpenSearch = useAppSelector(isOpenSearchSelector);

  //Next
  const pathname = usePathname();
  const router = useRouter();

  //Functions
  function previousPageHandler() {
    router.back();
  }

  return (
    <motion.div
      animate={{ opacity: isOpenSearch ? 0 : 1 }}
      className={`flex-1 h-7 lg:h-12 bg-primary/20 rounded-e-full flex items-center justify-start gap-1 px-2`}
    >
      <Button
        isIconOnly
        variant="light"
        size="sm"
        className="rounded-full text-primary max-h-full"
        as={Link}
        href={PATHS.CONTACT_US}
      >
        <div className="relative w-3 h-3 lg:w-4 lg:h-4">
          <Call className="w-3 h-3 lg:w-4 lg:h-4" color="#1E353C" />
        </div>
      </Button>
      {pathname !== "/" && (
        <Button
          isIconOnly
          variant="light"
          size="sm"
          className="rounded-full text-primary max-h-full"
          onPress={previousPageHandler}
        >
          <div className="relative w-3 h-3 lg:w-4 lg:h-4">
            <ArrowLeft2 className="w-3 h-3 lg:w-4 lg:h-4" color="#1E353C" />
          </div>
        </Button>
      )}
    </motion.div>
  );
};
