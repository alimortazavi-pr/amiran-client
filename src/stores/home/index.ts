import { createSlice } from "@reduxjs/toolkit";

//Types
import { IHomeState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/home/reducers";

const initialState: IHomeState = {
  heroImages: undefined,
  heroForm: {
    heroTitle: { en: "", fa: "" },
    heroDescription: { en: "", fa: "" },
  },
  heroEditSection: {
    label: "",
    value: undefined,
  },
};

export const homeReducer = createSlice({
  name: "home",
  initialState,
  reducers,
});

export default homeReducer.reducer;
