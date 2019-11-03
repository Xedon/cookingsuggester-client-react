import { Middleware, Action } from "redux";
import { State } from "../state/States";
import { LocationChangeAction } from "connected-react-router";
import { changeSuggestionScope } from "../state/actions/SuggestionActions";
import {
  deleteSuggestionAction,
  loadSuggestionFor
} from "../state/actions/SuggestionActions";

export const suggestionMiddleware: Middleware<{}, State> = store => next => (
  action: Action
) => {
  next(action);
  if (deleteSuggestionAction.done.match(action)) {
    loadSuggestionFor(
      store.dispatch,
      store.getState().suggestion.suggestionScope
    );
  }
  if (changeSuggestionScope.match(action)) {
    loadSuggestionFor(
      store.dispatch,
      store.getState().suggestion.suggestionScope
    );
  }
};
