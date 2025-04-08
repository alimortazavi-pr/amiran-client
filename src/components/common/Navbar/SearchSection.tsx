"use client";

import { Button, Input } from "@heroui/react";
import { ArrowRight, CloseCircle } from "iconsax-react";
import { AnimatePresence, motion } from "motion/react";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { isOpenSearchSelector } from "@/stores/layouts/selectors";
import { setIsOpenSearch } from "@/stores/layouts/actions";

export const SearchSection = () => {
  //Redux
  const dispatch = useAppDispatch();
  const isOpenSearch = useAppSelector(isOpenSearchSelector);

  //Functions
  function closeSearchHandler() {
    dispatch(setIsOpenSearch(false));
  }

  return (
    <AnimatePresence>
      {isOpenSearch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute w-full h-40 lg:h-52 bg-primary/20 top-6 lg:top-10 end-0 rounded-3xl backdrop-blur"
        >
          <div className="h-full w-full flex items-center justify-center px-5 lg:px-40 pt-8 lg:pt-16 relative">
            <Button
              className="absolute top-3 right-3"
              size="sm"
              isIconOnly
              variant="light"
              onPress={closeSearchHandler}
            >
              <CloseCircle className="w-5 h-5" color="#1E353C" />
            </Button>
            <Input
              label="Search"
              type="text"
              size="sm"
              className="w-full"
              endContent={
                <Button
                  variant="light"
                  aria-label="search"
                  size="sm"
                  isIconOnly
                >
                  <ArrowRight className="w-5 h-5" color="#1E353C" />
                </Button>
              }
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
