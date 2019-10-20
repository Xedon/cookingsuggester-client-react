import { connect } from "react-redux";
import { State, SuggestionState } from "../../state/States";
import { ComponentType } from "react";
import {
  loadRecipes,
  addRecipe,
  changeRecipeName,
  changeRecipeDescription,
  changeRecipeSource,
  changeRecipeText,
  changeAllowedOn,
  resetRecipeForm
} from "../../state/actions/RecipeActions";
import { Dispatch } from "redux";
import { Recipe } from "../../model/Recipe";
import { DayInWeek } from "../../model/DayInWeek";
import {
  Props,
  SuggestionListProps,
  SuggestionListDispatch
} from "./SuggestionListComponent";
import { Suggestion } from "../../model/Suggestion";
import { SuggestionListComponent } from "./SuggestionListComponent";

const mapStateToProps = (state: State): SuggestionListProps => ({
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
  onDeleteSuggestion: (suggestion: Suggestion) => {}
});

export const SuggestionListComponentConnted: ComponentType = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuggestionListComponent);
