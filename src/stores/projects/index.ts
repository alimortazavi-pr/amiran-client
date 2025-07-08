import { createSlice } from "@reduxjs/toolkit";

//Types
import { IProjectsState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/projects/reducers";

const initialState: IProjectsState = {
  form: {
    slug: "",
    description: { fa: "", en: "" },
    isPublished: true,
    usage: "",
    location: "",
    landArea: "",
    totalBuiltArea: "",
    numberOfFloors: "",
    numberOfUnits: "",
    unitArea: "",
    numberOfUnitsPerFloor: "",
    directions: "",
    deleted: false,
  },
  editSection: {
    label: "",
    value: undefined,
  },
};

export const projectsReducer = createSlice({
  name: "projects",
  initialState,
  reducers,
});

export default projectsReducer.reducer;
