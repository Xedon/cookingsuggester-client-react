import { ComponentType } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Suggestion } from "../../model/Suggestion";
import { loadRecipes } from "../../state/actions/RecipeActions";
import {
  deleteSuggestion,
  changeSuggestionScope
} from "../../state/actions/SuggestionActions";
import { State } from "../../state/States";
import { SuggestionScope } from "../../model/SuggestionScope";
import {
  SuggestionListComponent,
  SuggestionListDispatch,
  SuggestionListProps
} from "./SuggestionListComponent";

const mapStateToProps = (state: State): SuggestionListProps => ({
  suggestionScope: state.suggestion.suggestionScope,
  loading: state.suggestion.loading,
  loadingError: state.suggestion.loadingError,
  suggestions: state.suggestion.suggestions,
  page: state.suggestion.page,
  pages: state.suggestion.pages
});

const mapDispatchToProps = (dispatch: Dispatch): SuggestionListDispatch => ({
  onPageChange: (page: number) => {
    loadRecipes(dispatch, page - 1);
  },
  onDeleteSuggestion: (suggestion: Suggestion) => {
    deleteSuggestion(dispatch, suggestion);
  },
  onSuggestionScopeChange: (suggestionScope: SuggestionScope) => {
    dispatch(changeSuggestionScope(suggestionScope));
  }
});

export const SuggestionListComponentConnted: ComponentType = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionListComponent);
