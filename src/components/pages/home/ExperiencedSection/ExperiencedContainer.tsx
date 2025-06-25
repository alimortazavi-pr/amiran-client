"use client";

import { useEffect } from "react";

//Redux
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { employersImagesSelector } from "@/stores/duty/selectors";
import { fetchEmployersImagesAction } from "@/stores/duty/actions";

//Components
import { Description, ExperiencedItem } from ".";

export const ExperiencedContainer = () => {
  //Redux
  const dispatch = useAppDispatch();
  const employersImages = useAppSelector(employersImagesSelector);

  //Lifecycle
  useEffect(() => {
    if (!employersImages) {
      fetchEmployersImages();
    }
  }, [employersImages]);

  //Functions
  function fetchEmployersImages() {
    try {
      dispatch(fetchEmployersImagesAction());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
      {Array.from({ length: 13 }).map((_, index) =>
        index !== 6 ? (
          <ExperiencedItem key={index} index={index} />
        ) : (
          <Description key={index} />
        )
      )}
    </div>
  );
};
