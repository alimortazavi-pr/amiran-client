import { FC } from "react";

//Interfaces
import { CreateItem, TeamItem } from ".";

//Components
import { ITeam } from "@/common/interfaces";
import { EditTeamModal } from "./EditTeam";

interface IProps {
  teams: ITeam[];
}
export const TeamContainer: FC<IProps> = ({ teams }) => {
  return (
    <div className="w-full mb-36">
      <div className="grid grid-cols-12 md:gap-x-6 gap-y-16">
        {teams.map((team) => (
          <TeamItem team={team} key={team._id} />
        ))}
        <CreateItem />
        <EditTeamModal />
      </div>
    </div>
  );
};
