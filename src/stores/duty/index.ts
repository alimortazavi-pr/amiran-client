import { createSlice } from "@reduxjs/toolkit";

//Types
import { IDutyState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/duty/reducers";

const initialState: IDutyState = {
  employersImages: undefined,
  teamForm: {
    firstName: { fa: "", en: "" },
    lastName: { fa: "", en: "" },
    description: { fa: "", en: "" },
    image: "",
  },
  isEditingTeam: false,
};

export const dutyReducer = createSlice({
  name: "duty",
  initialState,
  reducers,
});

export default dutyReducer.reducer;
