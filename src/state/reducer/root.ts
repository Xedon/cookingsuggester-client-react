import { combineReducers, Reducer } from "redux";
import { reducer as global } from "./globalReducer";
import { reducer as recipe } from "./recipeReducer";
import { State } from "../States";
import { history } from "../HistoryStore";
import { connectRouter } from "connected-react-router";

export const reducer: Reducer<State> = combineReducers<State>({
  router: connectRouter(history),
  global,
  recipe
});
