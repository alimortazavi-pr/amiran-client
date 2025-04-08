//Components
import { ImagesSection } from ".";

export const UpToDateFeatureSectionContainer = () => {
  return (
    <div className="flex flex-col gap-4 mb-14 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
      <div className="flex items-center gap-2 xl:gap-3">
        <div className="h-10 min-w-2 md:h-12 md:min-w-3 xl:h-14 xl:min-w-4 bg-primary rounded-full"></div>
        <h6 className="text-primary text-sm font-medium min-h-10 flex items-center md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          Up-to-date and efficient workshop equipment
        </h6>
      </div>
      <ImagesSection />
    </div>
  );
};
