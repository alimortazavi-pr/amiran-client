import { AppThunk } from "@/stores";

//Actions of other reducers

//Reducer
import { projectsReducer } from ".";

//Actions from reducer
export const {} = projectsReducer.actions;

//Interfaces
import { IProject } from "@/common/interfaces";

//Utils
import { axiosInstance } from "@/common/axiosInstance";

//Actions
export function createProjectAction(): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.post(
        `/admin/projects`,
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

export function upsertThumbnailProject(form: FormData, slug: string): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.put(`/admin/projects/thumbnail/${slug}`, form, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}

export function upsertLogoProject(form: FormData, slug: string): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.put(`/admin/projects/logo/${slug}`, form, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}

export function upsertProjectImagesAction(
  project: IProject,
  form: FormData,
  weight: string
): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.post(
        `/admin/projects/images/${project.slug}/${weight}`,
        form,
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

export function uploadProjectPlansAction(
  projectSlug: string,
  form: FormData
): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.post(`/admin/projects/plans/${projectSlug}`, form, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}
