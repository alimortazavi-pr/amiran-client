"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

const variants = {
  hidden: { opacity: 0, x: 50 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export const MotionProvider: FC<PropsWithChildren> = ({ children }) => {
  //Next
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial={"hidden"}
        animate="enter"
        exit="exit"
        transition={{ duration: 0.4 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
