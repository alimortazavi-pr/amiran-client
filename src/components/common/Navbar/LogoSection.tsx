"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { useRouter } from "@bprogress/next/app";

//Assets
import homeLogo from "@/assets/svgs/logo.svg";
import dutyLogo from "@/assets/svgs/duty-logo.svg";
import contactUsLogo from "@/assets/svgs/contact-us-logo.svg";
import projectsLogo from "@/assets/svgs/projects-logo.svg";
import servicesLogo from "@/assets/svgs/services-logo.svg";
import whyAmiranLogo from "@/assets/svgs/why-amiran-logo.svg";
import blogLogo from "@/assets/svgs/blog-logo.svg";

//Constants
import { PATHS } from "@/common/constants";

export const LogoSection = () => {
  //Next
  const router = useRouter();
  const pathname = usePathname();

  //Life cycle
  const { logo } = useMemo(() => {
    switch (pathname) {
      case PATHS.HOME:
        return {
          logo: homeLogo,
        };
      case PATHS.PROJECTS:
        return {
          logo: projectsLogo,
        };
      case PATHS.SERVICES:
        return {
          logo: servicesLogo,
        };
      case PATHS.DUTY:
        return {
          logo: dutyLogo,
        };
      // case PATHS.WORK_PROCESS:
      //   return {
      //     logo: workProcessLogo,
      //   };
      case PATHS.WHY_AMIRAN:
        return {
          logo: whyAmiranLogo,
        };
      case PATHS.CONTACT_US:
        return {
          logo: contactUsLogo,
        };
      case PATHS.ARTICLES:
        return {
          logo: blogLogo,
        };
      default:
        return {
          icon: "",
        };
    }
  }, [pathname]);

  //Functions
  function goHomeHandler() {
    router.push(PATHS.HOME);
  }

  return (
    <div
      className="relative w-10 h-20 lg:w-20 lg:h-32 cursor-pointer z-10"
      onClick={goHomeHandler}
    >
      <Image src={logo} className="" alt="logo" fill />
    </div>
  );
};
