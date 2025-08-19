import { cookies } from "next/headers";

//Interfaces
import { IProject } from "@/common/interfaces";

//Components
import { ProjectPage } from "@/components/pages/project";
import { MotionProvider } from "@/components/providers/MotionProvider";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

async function getProject({ params }: IProps) {
  let project: IProject | undefined;
  try {
    const { slug } = await params;
    const res = await axiosInstance.get(`/projects/${slug}`, {
      headers: {
        Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
      },
    });

    project = await res.data.project;
  } catch (error: any) {
    console.log(error.response, "error");
  }

  return { project };
}

interface IProps {
  params: Promise<{ slug: string }>;
}
const page = async ({ params }: IProps) => {
  const { project } = await getProject({ params });

  return (
    <MotionProvider>
      <ProjectPage project={project as IProject} />
    </MotionProvider>
  );
};

export default page;
