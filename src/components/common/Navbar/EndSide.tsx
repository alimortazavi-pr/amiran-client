"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { SearchNormal } from "iconsax-react";
import { motion } from "motion/react";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { setIsOpenMenu, setIsOpenSearch } from "@/stores/layouts/actions";
import { isOpenSearchSelector } from "@/stores/layouts/selectors";

//Assets
import hamburgerIcon from "@/assets/svgs/icons/hamburger-icon.svg";

export const EndSide = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isOpenSearch = useAppSelector(isOpenSearchSelector);

  //Functions
  function openMenuHandler() {
    dispatch(setIsOpenMenu(true));
  }

  function openSearchHandler() {
    dispatch(setIsOpenSearch(true));
  }

  return (
    <motion.div
      animate={{ opacity: isOpenSearch ? 0 : 1 }}
      className={`flex-1 h-7 lg:h-12 bg-primary/20 flex items-center justify-end gap-1 px-2 rounded-s-full`}
    >
      <Button
        isIconOnly
        variant="light"
        size="sm"
        className="rounded-full text-primary max-h-full"
        onPress={openSearchHandler}
      >
        <SearchNormal className="w-3 h-3 lg:w-4 lg:h-4" color="#1E353C" />
      </Button>
      <Button
        isIconOnly
        variant="light"
        size="sm"
        className="rounded-full text-primary max-h-full"
        onPress={openMenuHandler}
      >
        <div className="relative w-3 h-3 lg:w-4 lg:h-4">
          <Image src={hamburgerIcon} fill alt="call icon" />
        </div>
      </Button>
    </motion.div>
  );
};
