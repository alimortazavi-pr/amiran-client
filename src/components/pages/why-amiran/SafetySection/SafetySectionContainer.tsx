import { SafetyDescription, SafetyIcons } from ".";

export const SafetySectionContainer = () => {
  return (
    <div className="flex items-start gap-5 mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32">
      <SafetyDescription />
      <SafetyIcons />
    </div>
  );
};
