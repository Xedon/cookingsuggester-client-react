import actionCreatorFactory from "typescript-fsa";
import { SuggestionScope } from "../../model/SuggestionScope";
import { Suggestion } from "../../model/Suggestion";
import wrapAsyncWorker from "../../typing/WrapAsyncWorker";
import { RemoteResourceLink } from "../../model/RemoteResourceLink";
import { SuggestionResponse } from "../../model/SuggestionResponse";

const actionCreator = actionCreatorFactory("suggestion");

export const loadSuggestionForAction = actionCreator.async<
  SuggestionScope,
  SuggestionResponse,
  void
>("LOAD_SUGGESTION_FOR");

export const loadSuggestionFor = wrapAsyncWorker(
  loadSuggestionForAction,
  (scope: SuggestionScope) =>
    fetch(
      "http://localhost:8080/api/v1/suggestions/search?sort=date&from=" +
        encodeURIComponent(scope.from.toJSON()) +
        "&to=" +
        encodeURIComponent(scope.to.toJSON())
    ).then((response: Response) => response.json())
);

export const deleteSuggestionAction = actionCreator.async<
  Suggestion,
  void,
  void
>("DELETE_SUGGESTION");

export const deleteSuggestion = wrapAsyncWorker(
  deleteSuggestionAction,
  (suggestion: Suggestion) =>
    fetch("http://localhost:8080/api/v1/suggestions/" + suggestion.id, {
      method: "DELETE"
    }).then()
);

export const changeSuggestionScope = actionCreator<SuggestionScope>(
  "CHANGE_SUGGESTION_SCOPE"
);
