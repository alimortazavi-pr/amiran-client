import { SafetyDescription, SafetyIcons } from ".";

export const SafetySectionContainer = () => {
  return (
    <div className="flex items-start gap-5 mb-16">
      <SafetyDescription />
      <SafetyIcons />
    </div>
  );
};
