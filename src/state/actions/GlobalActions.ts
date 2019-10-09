import actionCreatorFactory from "typescript-fsa";
import {GlobalState} from "../State";

const actionCreator = actionCreatorFactory("global");
export const switchRoute = actionCreator<GlobalState | undefined>(
  "SWITCH_ROUTE"
);
