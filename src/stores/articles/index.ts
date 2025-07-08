import { createSlice } from "@reduxjs/toolkit";

//Types
import { IArticlesState } from "@/common/interfaces";

//Reducers
import reducers from "@/stores/articles/reducers";

const initialState: IArticlesState = {
  form: {
    title: { fa: "", en: "" },
    slug: "",
    description: { fa: "", en: "" },
    content: { fa: "", en: "" },
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
