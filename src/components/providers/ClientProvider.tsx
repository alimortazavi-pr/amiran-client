"use client";

import { FC, PropsWithChildren } from "react";

//Components
import NextUIProvider from "./HeroUIProvider";
import ReduxProvider from "./ReduxProvider";
import RootProvider from "./RootProvider";

//Theme

//ProgressBar
import { ProgressProvider } from "@bprogress/next/app";

export const ClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider>
      <NextUIProvider>
        <ProgressProvider
          height="3px"
          color="#1D363D"
          options={{ showSpinner: false }}
          shallowRouting
        >
          <RootProvider>{children}</RootProvider>
        </ProgressProvider>
      </NextUIProvider>
    </ReduxProvider>
  );
};
