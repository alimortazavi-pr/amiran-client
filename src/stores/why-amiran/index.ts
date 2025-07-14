import { createSlice } from "@reduxjs/toolkit";

//Types
import { IWhyAmiranState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/why-amiran/reducers";

const initialState: IWhyAmiranState = {
  updatesImages: undefined,
  reportsImages: undefined,
};

export const whyAmiranReducer = createSlice({
  name: "whyAmiran",
  initialState,
  reducers,
});

export default whyAmiranReducer.reducer;
