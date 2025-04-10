import {
  BungalowProjects,
  TradeAdministrativeProjects,
  AdministrativeProjects,
  ResidentialProjects,
  RenovationAndInteriorDesignProjects,
  TradeAdministrativeProjects2,
} from ".";

export const CompletedProjectsContainer = () => {
  return (
    <div className="grid grid-cols-12 gap-y-14 md:gap-14 lg:gap-20">
      <BungalowProjects />
      <TradeAdministrativeProjects />
      <AdministrativeProjects />
      <ResidentialProjects />
      <RenovationAndInteriorDesignProjects />
      <TradeAdministrativeProjects2 />
    </div>
  );
};
