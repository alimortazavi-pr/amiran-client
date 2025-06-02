"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import { usePathname } from "next/navigation";

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

//Components
import { MenuDrawerContainer, MenuModalContainer } from "../common/MenuModal";

//Utils
import { storage } from "@/common/utils";

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  //Redux
  const dispatch = useAppDispatch();
  const didTryAutoLogin = useAppSelector(didTryAutoLoginSelector);
  const language = useAppSelector(languageSelector);

  //Next
  const pathname = usePathname();

    //Lifecycle
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
      {pathname.includes("/admin") ? (
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
    </>
  );
};

export default RootProvider;
