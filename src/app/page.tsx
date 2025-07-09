import { cookies } from "next/headers";

//Interfaces
import { IHome, IProject } from "@/common/interfaces";

//Components
import { HomePage } from "@/components/pages/home";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

async function getHeroAndProjects() {
  let projects: IProject[] = [];
  let home: IHome = {
    heroTitle: { en: "", fa: "" },
    heroDescription: { en: "", fa: "" },
  };
  try {
    const homeRes = await axiosInstance.get(`/`, {
      headers: {
        Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
      },
    });
    const projectsRes = await axiosInstance.get(`/projects?limit=4`, {
      headers: {
        Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
      },
    });
    projects = await projectsRes.data.projects;
    home = await homeRes.data;
  } catch (error: any) {
    console.log(error, "error");
  }

  return { projects, home };
}
export const dynamic = "force-dynamic";

const page = async () => {
  const { projects, home } = await getHeroAndProjects();

  return <HomePage home={home} projects={projects} />;
};

export default page;
