import { createSlice } from "@reduxjs/toolkit";

//Types
import { IHomeState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/home/reducers";

const initialState: IHomeState = {
  heroImages: [],
};

export const homeReducer = createSlice({
  name: "home",
  initialState,
  reducers,
});

export default homeReducer.reducer;
