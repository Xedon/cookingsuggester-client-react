import {reducerWithInitialState} from "typescript-fsa-reducers";
import {GlobalState} from "../State";
import {switchRoute} from "../actions/GlobalActions";
import {Reducer} from "react";
import {AnyAction} from "typescript-fsa";

export const reducer: Reducer<
  GlobalState | undefined,
  AnyAction
> = reducerWithInitialState({})
  .case(switchRoute, (state, payload) =>
    state !== undefined ? { ...state } : {}
  )
  .build();
