"use client";

import { FC, PropsWithChildren } from "react";
import { HeroUIProvider as HUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

//Redux

const HeroUIProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
    </HUIProvider>
  );
};

export default HeroUIProvider;
