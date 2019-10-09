import {RouterState} from "connected-react-router";

export type State = Readonly<{
  global: GlobalState | undefined;
  router: RouterState;
}>;

export type GlobalState = Readonly<{}>;
