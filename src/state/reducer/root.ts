import {combineReducers, Reducer} from "redux";
import {reducer as global} from "./globalReducer";
import {State} from "../State";
import {history} from "../HistoryStore";
import {connectRouter} from "connected-react-router";

export const reducer: Reducer<State> = combineReducers<State>({
  global,
  router: connectRouter(history)
});
