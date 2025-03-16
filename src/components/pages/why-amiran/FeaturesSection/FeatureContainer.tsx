//Components
import {
  FeatureFive,
  FeatureFour,
  FeatureOne,
  FeatureThree,
  FeatureTwo,
} from ".";

export const FeatureContainer = () => {
  return (
    <ul className="flex flex-col gap-6 mb-12">
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <FeatureFour />
      <FeatureFive />
    </ul>
  );
};
