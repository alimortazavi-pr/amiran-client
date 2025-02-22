import { createSlice } from "@reduxjs/toolkit";

//Types
import { ILayoutsState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/layouts/reducers";

const initialState: ILayoutsState = {
  language: "en",
};

export const layoutsReducer = createSlice({
  name: "layouts",
  initialState,
  reducers,
});

export default layoutsReducer.reducer;
