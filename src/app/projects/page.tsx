import { cookies } from "next/headers";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { ProjectsPage } from "@/components/pages/projects";
import { MotionProvider } from "@/components/providers/MotionProvider";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

async function getProjects() {
  let projects: IProject[] = [];
  try {
    const res = await axiosInstance.get(`/projects?limit=9999`, {
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

  return (
    <MotionProvider>
      <ProjectsPage projects={projects} />
    </MotionProvider>
  );
};

export default page;
