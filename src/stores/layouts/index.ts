import { createSlice } from "@reduxjs/toolkit";

//Types
import { ILayoutsState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/layouts/reducers";

const initialState: ILayoutsState = {
  language: "en",
  isOpenMenu: false,
  isOpenSearch: false,
  videos: {
    home: "",
    duty: "",
    services: "",
  },
  contactUsForm: {
    title: { en: "", fa: "" },
    description: { en: "", fa: "" },
    instagram: { fa: "", en: "" },
    address: { fa: "", en: "" },
    phones: { fa: "", en: "" },
  },
  contactUsEditSection: {
    label: "",
    value: undefined,
  },
};

export const layoutsReducer = createSlice({
  name: "layouts",
  initialState,
  reducers,
});

export default layoutsReducer.reducer;
