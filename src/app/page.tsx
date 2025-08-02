//Interfaces
import { IArticle, IHome, IProject } from "@/common/interfaces";

//Components
import { HomePage } from "@/components/pages/home";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

async function getHeroAndProjects() {
  let projects: IProject[] = [];
  let articles: IArticle[] = [];
  let home: IHome = {
    heroTitle: { en: "", fa: "" },
    heroDescription: { en: "", fa: "" },
  };
  try {
    const homeRes = await axiosInstance.get(`/`);
    const projectsRes = await axiosInstance.get(`/projects?limit=4`);
    const articlesRes = await axiosInstance.get(`/articles?limit=4`);
    projects = await projectsRes.data.projects;
    articles = await articlesRes.data.articles;
    home = await homeRes.data;
  } catch (error: any) {
    console.log(error, "error");
  }

  return { projects, home, articles };
}
export const dynamic = "force-dynamic";

const page = async () => {
  const { projects, home, articles } = await getHeroAndProjects();

  return <HomePage home={home} projects={projects} articles={articles} />;
};

export default page;
