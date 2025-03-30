//Components
import { ImagesSection } from ".";

export const UpToDateFeatureSectionContainer = () => {
  return (
    <div className="flex flex-col gap-4 mb-14 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
      <div className="ps-2 border-s-5 border-primary text-sm font-medium min-h-10 flex items-center md:text-base lg:text-lg xl:text-2xl 2xl:text-4xl">
        Up-to-date and efficient workshop equipment
      </div>
      <ImagesSection />
    </div>
  );
};
