import { cookies } from "next/headers";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { HomePage } from "@/components/pages/home";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

async function getProjects() {
  let projects: IProject[] = [];
  try {
    const res = await axiosInstance.get(`/admin/projects?limit=4`, {
      headers: {
        Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
      },
    });
    projects = await res.data.projects;
  } catch (error: any) {
    console.log(error, "error");
  }

  return { projects };
}
export const dynamic = "force-dynamic";

const page = async () => {
  const { projects } = await getProjects();

  return <HomePage projects={projects} />;
};

export default page;
