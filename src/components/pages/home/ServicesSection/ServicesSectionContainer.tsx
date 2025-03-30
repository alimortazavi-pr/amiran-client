"use client";

//Components
import { Description } from ".";
import { ItemsContainer } from "./items";

export const ServicesSectionContainer = () => {
  return (
    <section aria-label="services section">
      <div className="grid grid-cols-12 gap-2 lg:gap-4 px-4 md:px-0">
        <ItemsContainer />
        <Description />
      </div>
    </section>
  );
};
