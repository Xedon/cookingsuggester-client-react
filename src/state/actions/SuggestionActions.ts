import actionCreatorFactory from "typescript-fsa";
import {SuggestionScope} from "../../model/SuggestionScope";
import {Suggestion} from "../../model/Suggestion";

const actionCreator = actionCreatorFactory('suggestion');

export const loadSuggestionFor = actionCreator<SuggestionScope>('LOAD_SUGGESTION_FOR');
export const deleteSuggestion = actionCreator<Suggestion>('DELETE_SUGGESTION')