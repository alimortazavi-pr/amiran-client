import { SafetyDescription, SafetyIcons } from ".";

export const SafetySectionContainer = () => {
  return (
    <div className="flex items-start gap-5">
      <SafetyDescription />
      <SafetyIcons />
    </div>
  );
};
