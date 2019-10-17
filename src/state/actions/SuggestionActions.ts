import actionCreatorFactory from "typescript-fsa";
import { SuggestionScope } from "../../model/SuggestionScope";
import { Suggestion } from "../../model/Suggestion";
import wrapAsyncWorker from "../../typing/WrapAsyncWorker";
import { RemoteResourceLink } from "../../model/RemoteResourceLink";

const actionCreator = actionCreatorFactory("suggestion");

export const loadSuggestionForAction = actionCreator.async<
  SuggestionScope,
  Array<Suggestion>,
  void
>("LOAD_SUGGESTION_FOR");

export const loadSuggestionFor = wrapAsyncWorker(
  loadSuggestionForAction,
  (scope: SuggestionScope) =>
    fetch("http://localhost:8080/api/v1/suggestions", {
      body: new URLSearchParams([
        ["from", scope.from.toJSON()],
        ["to", scope.to.toJSON()]
      ])
    }).then((response: Response) => response.json())
);

export const deleteSuggestionAction = actionCreator.async<
  Suggestion & RemoteResourceLink,
  void,
  void
>("DELETE_SUGGESTION");

export const deleteSuggestion = wrapAsyncWorker(
  deleteSuggestionAction,
  (suggestion: Suggestion & RemoteResourceLink) =>
    fetch(suggestion._links.self.href, { method: "DELETE" }).then()
);
