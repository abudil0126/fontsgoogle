import { createStore, combineReducers } from "redux";
import sidebarReducer from "../features/sidebarSlice";
import searchReducer from "../features/searchSlice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  search: searchReducer,
});

const store = createStore(rootReducer);

export default store;
