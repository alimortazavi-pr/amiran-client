import { cookies } from "next/headers";

//Interfaces
import { IDuty, ITeam } from "@/common/interfaces";

//Components
import { DutyPage } from "@/components/pages/duty";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

async function getDuty() {
  let duty: IDuty = {
    _id: "",
    workProcessTitle: { fa: "", en: "" },
    workProcessDescription: { fa: "", en: "" },
    workProcessImage: "",
    deleted: false,
  };
  try {
    const res = await axiosInstance.get(`/duty/work-process`, {
      headers: {
        Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
      },
    });

    duty = await res.data;
  } catch (error: any) {
    console.log(error, "error");
  }

  return { duty };
}

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
  const { duty } = await getDuty();

  return <DutyPage teams={teams} duty={duty} />;
};

export default page;
