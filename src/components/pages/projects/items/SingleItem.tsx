"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

//Assets
import projectItemTestImage from "@/assets/svgs/projects/project-item-test.svg";

//Constants
import { PATHS } from "@/common/constants";

export const SingleItem = () => {
  //Next
  const router = useRouter();

  //Functions
  const handleProjectClick = () => {
    router.push(PATHS.PROJECT("1"));
  };

  return (
    <div className="col-span-6 md:col-span-4">
      <div
        className="w-full h-48 md:h-72 lg:h-96 xl:h-[460px] relative cursor-pointer"
        onClick={handleProjectClick}
      >
        <Image src={projectItemTestImage} alt="single project" fill />
      </div>
    </div>
  );
};
