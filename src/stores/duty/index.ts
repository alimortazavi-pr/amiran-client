import { createSlice } from "@reduxjs/toolkit";

//Types
import { IDutyState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/duty/reducers";

const initialState: IDutyState = {
  employersImages: undefined,
};

export const dutyReducer = createSlice({
  name: "duty",
  initialState,
  reducers,
});

export default dutyReducer.reducer;
