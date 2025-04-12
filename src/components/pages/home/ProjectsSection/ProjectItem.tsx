"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

//Assets
import projectItemTestImage from "@/assets/svgs/projects/project-item-test.svg";

//Constants
import { PATHS } from "@/common/constants";

export const ProjectItem = () => {
  //Next
  const router = useRouter();

  //Functions
  const handleProjectClick = () => {
    router.push(PATHS.PROJECT("1"));
  };

  return (
    <div className="col-span-2 md:col-span-1">
      <div className="w-full h-48 lg:h-56 xl:h-80 2xl:h-96 relative" onClick={handleProjectClick}>
        <Image src={projectItemTestImage} alt="single project" fill />
      </div>
    </div>
  );
};
