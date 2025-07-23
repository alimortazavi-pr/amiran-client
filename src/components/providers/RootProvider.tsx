"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";

//Toast
import { Slide, ToastContainer } from "react-toastify";
const contextClass = {
  success: "bg-success-600",
  error: "bg-danger-600",
  info: "bg-primary-600",
  warning: "bg-warning-400",
  default: "bg-default-600",
};

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { languageSelector } from "@/stores/layouts/selectors";
import { didTryAutoLoginSelector } from "@/stores/auth/selectors";
import { autoLogin, logOut } from "@/stores/auth/actions";
import { fetchVideosAction, setLanguage } from "@/stores/layouts/actions";

//Components
import { MenuDrawerContainer, MenuModalContainer } from "../common/MenuModal";
import { ClarityInit } from "./ClarityInit";

//Utils
import { storage } from "@/common/utils";
import { SplashScreen } from "../common/SplashScreen";

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  //Redux
  const dispatch = useAppDispatch();
  const didTryAutoLogin = useAppSelector(didTryAutoLoginSelector);
  const language = useAppSelector(languageSelector);

  //Next
  const pathname = usePathname();

  //States
  const [isVisibleSplashScreen, setIsVisibleSplashScreen] = useState(true);

  //Lifecycle
  useEffect(() => {
    dispatch(fetchVideosAction());

    //check language
    const language = storage.getLanguage();
    dispatch(setLanguage(language));
  }, []);

  useEffect(() => {
    autoLoginFunc();
  }, [dispatch, didTryAutoLogin]);

  //Functions
  async function autoLoginFunc() {
    const token = storage.getToken();
    if (token && !didTryAutoLogin) {
      try {
        dispatch(autoLogin(token));
      } catch (err: any) {
        dispatch(logOut());
        console.log(err);
      }
    } else if (!token) {
      dispatch(logOut());
    }
  }

  return (
    <>
      {isVisibleSplashScreen ? (
        <SplashScreen
          isVisible={isVisibleSplashScreen}
          setIsVisibleSplashScreen={setIsVisibleSplashScreen}
        />
      ) : pathname.includes("/admin") ? (
        <>{children}</>
      ) : (
        <>
          <div className="overflow-x-hidden container max-w-screen-xl p-8 lg:p-12 mx-auto">
            {children}
          </div>
          <MenuModalContainer />
          <MenuDrawerContainer />
        </>
      )}

      <ToastContainer
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={language !== "en"}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
        position={language !== "en" ? "bottom-left" : "bottom-right"}
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " flex items-center p-3 rounded-lg shadow-lg mb-2"
        }
      />
      <ClarityInit />
      <GoogleAnalytics gaId="G-J5824BHDBC" />
    </>
  );
};

export default RootProvider;
