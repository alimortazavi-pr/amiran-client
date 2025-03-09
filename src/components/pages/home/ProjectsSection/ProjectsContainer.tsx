"use client";

import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

//Components
import { ProjectItem } from ".";

export const ProjectsContainer = () => {
  //Responsive
  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  //States
  const [isClient, setIsClient] = useState(false);

  //LifeCycle
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="grid grid-cols-4 gap-5 lg:gap-20 xl:gap-28 2xl:gap-40 px-10">
        <ProjectItem />
        <ProjectItem />
        {isLg && (
          <>
            <ProjectItem />
            <ProjectItem />
          </>
        )}
      </div>
    )
  );
};
