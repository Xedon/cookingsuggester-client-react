import actionCreatorFactory from "typescript-fsa";
import { GlobalState } from "../States";

const actionCreator = actionCreatorFactory("global");
export const switchRoute = actionCreator<GlobalState | undefined>(
  "SWITCH_ROUTE"
);
