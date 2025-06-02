import { AppThunk } from "@/stores";

//Actions of other reducers

//Reducer
import { homeReducer } from ".";

//Actions from reducer
export const { setHeroImages } = homeReducer.actions;

//Interfaces

//Utils
import { axiosInstance } from "@/common/axiosInstance";

//Actions
export function fetchHeroImagesAction(): AppThunk {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.get(`/hero-images`);
      if (res.data.images?.length) {
        await dispatch(setHeroImages(res.data.images));
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
      const res = await axiosInstance.post(
        `/admin/home/hero-images/${weight}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
      if (isExist) {
        await dispatch(
          setHeroImages([
            ...getState().home.heroImages.map((hi) =>
              hi.weight === weight ? res.data.image : hi
            ),
          ])
        );
      } else {
        await dispatch(
          setHeroImages([...getState().home.heroImages, res.data.image])
        );
      }
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}
