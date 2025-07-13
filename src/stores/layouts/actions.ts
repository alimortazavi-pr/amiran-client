import { AppThunk } from "@/stores";

//Actions of other reducers

//Reducer
import { layoutsReducer } from ".";

//Actions from reducer
export const {
  setLanguage,
  setIsOpenMenu,
  setIsOpenSearch,
  setVideos,
  setContactUsEditSection,
  setContactUsForm,
} = layoutsReducer.actions;

//Interfaces

//Types
import { languagesType } from "@/common/types";

//Enums
import { videoSectionEnum } from "@/common/enums";

//Utils
import { storage } from "@/common/utils";
import { axiosInstance } from "@/common/axiosInstance";

//Actions
export function toggleIsOpenSearchAction(): AppThunk {
  return (dispatch, getState) => {
    dispatch(setIsOpenSearch(!getState().layouts.isOpenSearch));
  };
}

export function setLanguageAction(language: languagesType): AppThunk {
  return async (dispatch) => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.dir = language !== "en" ? "rtl" : "ltr";
      htmlElement.lang = language;
    }
    dispatch(setLanguage(language));
    storage.setLanguage(language);
  };
}

export function fetchVideosAction(): AppThunk {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.get(`/layouts/videos`);
      await dispatch(setVideos(res.data.videos));
    } catch (err: any) {
      console.log(err);
      throw new Error(err.response.data.message);
    }
  };
}

export function upsertVideo(
  form: FormData,
  section: videoSectionEnum
): AppThunk {
  return async (dispatch, getState) => {
    try {
      const res = await axiosInstance.post(
        `/admin/layouts/videos/${section}`,
        form,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      );
      dispatch(
        setVideos({
          ...getState().layouts.videos,
          [section]: res.data.video.video,
        })
      );
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };
}

export function upsertContactUsAction(): AppThunk {
  return async (dispatch, getState) => {
    try {
      await axiosInstance.put(
        `/admin/layouts/description-contact-us`,
        getState().layouts.contactUsForm,
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
