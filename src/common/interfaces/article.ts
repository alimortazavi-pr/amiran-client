export interface IArticlesState {
  form: IArticleForm;
  editSection: {
    label: string;
    value: keyof IArticleForm | undefined;
  };
}

export interface IArticle {
  _id: string;
  thumbnail: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  isPublished: boolean;
  deleted: boolean;
}

export interface IArticleForm {
  title: string;
  slug: string;
  description: string;
  content: string;
}
