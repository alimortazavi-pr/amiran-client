//Components
import { FeatureItem } from ".";

export const FeatureContainer = () => {
  return (
    <ul className="flex flex-col gap-6 mb-12 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
      <FeatureItem content="WHY_AMIRAN.WhyAmiranFeatures1_Label" />
      <FeatureItem content="WHY_AMIRAN.WhyAmiranFeatures2_Label" />
      <FeatureItem content="WHY_AMIRAN.WhyAmiranFeatures3_Label" />
      <FeatureItem content="WHY_AMIRAN.WhyAmiranFeatures4_Label" />
      <FeatureItem content="WHY_AMIRAN.WhyAmiranFeatures5_Label" />
    </ul>
  );
};
