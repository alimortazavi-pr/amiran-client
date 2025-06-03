import { AppThunk } from "@/stores";

//Actions of other reducers

//Reducer
import { projectsReducer } from ".";

//Actions from reducer
export const {} = projectsReducer.actions;

//Interfaces

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

export function fetchHeroImagesAction(): AppThunk {
  return async () => {
    try {
      const res = await axiosInstance.get(`/hero-images`);
      if (res.data.images?.length) {
        // await dispatch(setHeroImages(res.data.images));
      }
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  };
}

export function upsertHeroImageAction(
  form: FormData,
  weight: string,
  isExist: boolean = false
): AppThunk {
  return async (dispatch, getState) => {
    try {
       await axiosInstance.post(
        `/admin/projects/hero-images/${weight}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
      if (isExist) {
        // await dispatch(
        //   setHeroImages([
        //     ...getState().projects.heroImages.map((hi) =>
        //       hi.weight === weight ? res.data.image : hi
        //     ),
        //   ])
        // );
      } else {
        // await dispatch(
        //   setHeroImages([...getState().projects.heroImages, res.data.image])
        // );
      }
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}
