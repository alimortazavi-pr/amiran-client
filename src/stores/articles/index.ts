import { createSlice } from "@reduxjs/toolkit";

//Types
import { IArticlesState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/articles/reducers";

const initialState: IArticlesState = {
  form: {
    title: "",
    slug: "",
    description: "",
    content: "",
  },
  editSection: {
    label: "",
    value: undefined,
  },
};

export const articlesReducer = createSlice({
  name: "articles",
  initialState,
  reducers,
});

export default articlesReducer.reducer;
