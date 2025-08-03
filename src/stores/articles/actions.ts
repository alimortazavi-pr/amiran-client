import { AppThunk } from "@/stores";

//Actions of other reducers

//Reducer
import { articlesReducer } from ".";

//Actions from reducer
export const { setForm, setEditSection } = articlesReducer.actions;

//Interfaces
import { IArticle } from "@/common/interfaces";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

//Actions
export function pin1ArticleAction(slug: string): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.get(`/admin/articles/pin-1/${slug}`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  };
}

export function pin2ArticleAction(slug: string): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.get(`/admin/articles/pin-2/${slug}`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  };
}

export function createArticleAction(): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.post(
        `/admin/articles`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  };
}

export function upsertArticleImagesAction(
  article: IArticle,
  form: FormData
): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.post(`/admin/articles/images/${article.slug}`, form, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}

export function hardDeleteArticleImageAction(id: string): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.delete(`/admin/articles/images/${id}/hard`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  };
}

export function updateArticleAction(articleSlug: string): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.put(
        `/admin/articles/${articleSlug}`,
        getState().articles.form,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}

export function softDeleteArticleAction(slug: string): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.delete(`/admin/articles/${slug}/soft`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  };
}
