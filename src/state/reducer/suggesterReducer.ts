import { Reducer } from "redux";
import { SuggestionState, initialSuggestionState } from "../States";
import {
  reducerWithInitialState,
  reducerWithoutInitialState
} from "typescript-fsa-reducers";
import {
  loadSuggestionForAction,
  changeSuggestionScope
} from "../actions/SuggestionActions";

export const reducer = reducerWithInitialState<SuggestionState>(
  initialSuggestionState
)
  .case(loadSuggestionForAction.started, state => ({
    ...state,
    loading: true,
    loadingError: "",
    suggestions: []
  }))
  .case(loadSuggestionForAction.done, (state, playload) => ({
    ...state,
    suggestions: playload.result.content.map(suggestion => ({
      id: suggestion.id,
      date: new Date(suggestion.date),
      recipe: suggestion.recipe
    })),
    page: playload.result.number,
    pages: playload.result.totalPages,
    loading: false,
    loadingError: ""
  }))
  .case(changeSuggestionScope, (state, payload) => ({
    ...state,
    suggestionScope: payload
  }))
  .build();
