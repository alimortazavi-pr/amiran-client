import { AppThunk } from "@/stores";

//Actions of other reducers

//Reducer
import { dutyReducer } from ".";

//Actions from reducer
export const { setEmployersImages, setSelectedTeam } = dutyReducer.actions;

//Interfaces

//Utils
import { axiosInstance } from "@/common/axiosInstance";

//Actions
export function fetchEmployersImagesAction(isMd: boolean = false): AppThunk {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.get(`/duty/employers-images`);
      if (res.data.images?.length) {
        if (res.data.images?.length > 3 && !isMd) {
          const newImages = [];
          for (const image of res.data.images) {
            if (image.weight == 1) {
              newImages.push({ ...image, weight: "4" });
            } else if (image.weight <= 4) {
              newImages.push({ ...image, weight: image.weight - 1 });
            } else {
              newImages.push(image);
            }
          }
          await dispatch(setEmployersImages(newImages));
        } else {
          await dispatch(setEmployersImages(res.data.images));
        }
      }
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  };
}

export function upsertEmployerImageAction(
  form: FormData,
  weight: string,
  isExist: boolean = false
): AppThunk {
  return async (dispatch, getState) => {
    try {
      const res = await axiosInstance.post(
        `/admin/duty/employers-images/${weight}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
      if (isExist) {
        await dispatch(
          setEmployersImages([
            ...(getState().duty.employersImages || []).map((di) =>
              di.weight === weight ? res.data.image : di
            ),
          ])
        );
      } else {
        await dispatch(
          setEmployersImages([
            ...(getState().duty.employersImages || []),
            res.data.image,
          ])
        );
      }
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}

export function createTeamAction(): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.post(
        `/admin/duty/team`,
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

export function updateTeamAction(teamId: string, form: FormData): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.put(`/admin/duty/team/${teamId}`, form, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}

export function upsertWorkProcessAction(form: FormData): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.put(`/admin/duty/work-process`, form, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}
