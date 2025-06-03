import { createSlice } from "@reduxjs/toolkit";

//Types
import { IProjectsState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/projects/reducers";

const initialState: IProjectsState = {};

export const projectsReducer = createSlice({
  name: "projects",
  initialState,
  reducers,
});

export default projectsReducer.reducer;
