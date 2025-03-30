//Components
import { FeatureItem } from ".";

export const FeatureContainer = () => {
  return (
    <ul className="flex flex-col gap-6 mb-12 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
      <FeatureItem content="Supplying goods and materials at the right time and price" />
      <FeatureItem content="Transparent financial infrastructure" />
      <FeatureItem content="Technical and operational infrastructure" />
      <FeatureItem content="Documenting project implementation operations" />
      <FeatureItem content="Establishing and complying with HSE requirements" />
    </ul>
  );
};
