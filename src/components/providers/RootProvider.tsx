"use client";

import { FC, PropsWithChildren } from "react";

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
import { useAppSelector } from "@/stores/hooks";
import { languageSelector } from "@/stores/layouts/selectors";

//Components

//Utils

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  //Redux
  const language = useAppSelector(languageSelector);

  return (
    <>
      <div className="overflow-x-hidden container mx-auto p-2">{children}</div>
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
