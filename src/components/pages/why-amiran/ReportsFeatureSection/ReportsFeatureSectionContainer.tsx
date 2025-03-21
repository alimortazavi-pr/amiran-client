//Components
import { ImagesSection } from ".";

export const ReportsFeatureSectionContainer = () => {
  return (
    <div className="flex flex-col gap-4 mb-16">
      <div className="ps-2 border-s-5 border-primary text-sm font-medium min-h-10 flex items-center">
        Weekly and monthly reports to the employer
      </div>
      <ImagesSection />
    </div>
  );
};
