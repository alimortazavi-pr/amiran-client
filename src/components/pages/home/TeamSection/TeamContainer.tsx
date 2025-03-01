import { TeamItem } from ".";

export const TeamContainer = () => {
  return (
    <div className="grid grid-cols-12 gap-3 px-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <TeamItem key={index} index={index} />
      ))}
    </div>
  );
};
