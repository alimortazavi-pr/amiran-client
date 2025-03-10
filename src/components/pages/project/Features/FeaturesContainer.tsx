import { FeatureItem } from ".";

export const FeaturesContainer = () => {
  return (
    <div className="grid grid-cols-12 gap-y-10 mb-24">
      <FeatureItem title="USAGE" content="COMMERCIAL,RESIDENTIAL" />
      <FeatureItem title="LOCATION" content="BOLVAR AMIN" />
      <FeatureItem title="LAND ARE" content="300 M2" />
      <FeatureItem title="TOTAL BUILT AREA" content="2700 M2" />
      <FeatureItem title="NUMBER OF FLOORS" content="8 FLOORS" />
      <FeatureItem title="NUMBER OF UNITS" content="11 UNITS" />
      <FeatureItem title="UNIT AREA" content="110 | 150" />
      <FeatureItem title="NUMBER OF UNITS PER FLOOR" content="2" />
    </div>
  );
};
