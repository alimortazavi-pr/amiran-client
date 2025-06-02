import { createSlice } from "@reduxjs/toolkit";

//Interfaces
import { IProfileState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/profile/reducers";

const initialState: IProfileState = {
  user: undefined,
};

export const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers,
});

export default profileReducer.reducer;
