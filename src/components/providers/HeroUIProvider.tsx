"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { HeroUIProvider as HUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const HeroUIProvider: FC<PropsWithChildren> = ({ children }) => {
  //States
  const [mounted, setMounted] = useState(false);

  //LifeCycle
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <HUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          {children}
        </NextThemesProvider>
      </HUIProvider>
    )
  );
};

export default HeroUIProvider;
