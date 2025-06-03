import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

//Reducers
import layouts from "./layouts";
import auth from "./auth";
import profile from "./profile";
import home from "./home";
import projects from "./projects";

export function makeStore() {
  return configureStore({
    reducer: {
      layouts: layouts,
      auth: auth,
      profile: profile,
      home: home,
      projects: projects,
    },
  });
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
