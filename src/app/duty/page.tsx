import { cookies } from "next/headers";

//Interfaces
import { ITeam } from "@/common/interfaces";

//Components
import { DutyPage } from "@/components/pages/duty";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

async function getTeam() {
  let teams: ITeam[] = [];
  try {
    const res = await axiosInstance.get(`/duty/team?limit=9999`, {
      headers: {
        Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
      },
    });
    teams = await res.data.teams;
  } catch (error: any) {
    console.log(error, "error");
  }

  return { teams };
}
export const dynamic = "force-dynamic";

const page = async () => {
  const { teams } = await getTeam();

  return <DutyPage teams={teams} />;
};

export default page;
