import { cookies } from "next/headers";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Components
import { ArticlesPage } from "@/components/pages/articles";
import { MotionProvider } from "@/components/providers/MotionProvider";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

async function getArticles() {
  let articles: IArticle[] = [];
  try {
    const res = await axiosInstance.get(`/articles?limit=9999`, {
      headers: {
        Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
      },
    });
    articles = await res.data.articles;
  } catch (error: any) {
    console.log(error, "error");
  }

  return { articles };
}
export const dynamic = "force-dynamic";

const page = async () => {
  const { articles } = await getArticles();

  return (
    <MotionProvider>
      <ArticlesPage articles={articles} />
    </MotionProvider>
  );
};

export default page;
