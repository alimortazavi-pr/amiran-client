export interface IArticlesState {
  form: IArticleForm;
  editSection: {
    label: string;
    value: keyof IArticleForm | undefined;
  };
}

export interface IArticle {
  _id: string;
  images: IArticleImage[];
  title: { fa: string; en: string };
  slug: string;
  description: { fa: string; en: string };
  content: { fa: string; en: string };
  isPublished: boolean;
  deleted: boolean;
}

export interface IArticleForm {
  title: { fa: string; en: string };
  slug: string;
  description: { fa: string; en: string };
  content: { fa: string; en: string };
}

export interface IArticleImage {
  _id: string;
  article: string;
  url: string;
}
