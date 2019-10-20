import { Reducer } from "redux";
import { SuggestionState, initialSuggestionState } from "../States";
import {
  reducerWithInitialState,
  reducerWithoutInitialState
} from "typescript-fsa-reducers";
import { loadSuggestionForAction } from "../actions/SuggestionActions";

export const reducer = reducerWithInitialState<SuggestionState>(
  initialSuggestionState
)
  .case(loadSuggestionForAction.started, (state, playload) => ({
    ...state,
    loading: true,
    loadingError: ""
  }))
  .case(loadSuggestionForAction.done, (state, playload) => ({
    ...state,
    suggestions: playload.result.content,
    page: playload.result.number,
    pages: playload.result.totalPages,
    loading: false,
    loadingError: ""
  }))
  .build();
