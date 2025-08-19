import { cookies } from "next/headers";

//Interfaces
import { IArticle } from "@/common/interfaces";

//Components
import { ArticlePage } from "@/components/pages/article";
import { MotionProvider } from "@/components/providers/MotionProvider";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

async function getArticle({ params }: IProps) {
  let article: IArticle | undefined;
  try {
    const { slug } = await params;
    const res = await axiosInstance.get(`/articles/${slug}`, {
      headers: {
        Authorization: `Bearer ${(await cookies()).get("token")?.value}`,
      },
    });

    article = await res.data.article;
  } catch (error: any) {
    console.log(error.response, "error");
  }

  return { article };
}

interface IProps {
  params: Promise<{ slug: string }>;
}
const page = async ({ params }: IProps) => {
  const { article } = await getArticle({ params });

  return (
    <MotionProvider>
      <ArticlePage article={article as IArticle} />
    </MotionProvider>
  );
};

export default page;
