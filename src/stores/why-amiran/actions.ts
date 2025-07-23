import { AppThunk } from "@/stores";

//Actions of other reducers

//Reducer
import { whyAmiranReducer } from ".";

//Actions from reducer
export const { setUpdatesImages, setReportsImages, setBrands } =
  whyAmiranReducer.actions;

//Interfaces

//Utils
import { axiosInstance } from "@/common/axiosInstance";

//Actions
export function fetchUpdatesImagesAction(): AppThunk {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.get(`/why-amiran/updates-images`);
      if (res.data.images?.length) {
        await dispatch(setUpdatesImages(res.data.images));
      }
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  };
}

export function upsertUpdateImageAction(
  form: FormData,
  weight: string,
  isExist: boolean = false
): AppThunk {
  return async (dispatch, getState) => {
    try {
      const res = await axiosInstance.post(
        `/admin/why-amiran/updates-images/${weight}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
      if (isExist) {
        await dispatch(
          setUpdatesImages([
            ...(getState().whyAmiran.updatesImages || []).map((ui) =>
              ui.weight === weight ? res.data.image : ui
            ),
          ])
        );
      } else {
        await dispatch(
          setUpdatesImages([
            ...(getState().whyAmiran.updatesImages || []),
            res.data.image,
          ])
        );
      }
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}

export function fetchReportsImagesAction(): AppThunk {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.get(`/why-amiran/reports-images`);
      if (res.data.images?.length) {
        await dispatch(setReportsImages(res.data.images));
      }
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  };
}

export function upsertReportImageAction(
  form: FormData,
  weight: string,
  isExist: boolean = false
): AppThunk {
  return async (dispatch, getState) => {
    try {
      const res = await axiosInstance.post(
        `/admin/why-amiran/reports-images/${weight}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
      if (isExist) {
        await dispatch(
          setReportsImages([
            ...(getState().whyAmiran.reportsImages || []).map((ui) =>
              ui.weight === weight ? res.data.image : ui
            ),
          ])
        );
      } else {
        await dispatch(
          setReportsImages([
            ...(getState().whyAmiran.reportsImages || []),
            res.data.image,
          ])
        );
      }
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}

export function fetchBrandsAction(): AppThunk {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.get(`/layouts/brands?limit=9999`);
      if (res.data.brands?.length) {
        await dispatch(setBrands(res.data.brands));
      }
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  };
}
