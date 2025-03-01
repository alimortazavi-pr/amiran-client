import { Description, TeamItem } from ".";

export const TeamContainer = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 px-4">
      {Array.from({ length: 13 }).map((_, index) =>
        index !== 6 ? <TeamItem key={index} index={index} /> : <Description key={index} />
      )}
    </div>
  );
};
