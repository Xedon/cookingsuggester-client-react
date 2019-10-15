import {
  RecipeListComponent,
  RecipeListProps,
  RecipeListDispatch,
  Props
} from "./RecipeListComponent";
import { connect } from "react-redux";
import { State } from "../../state/States";
import { ComponentType } from "react";
import {
  loadRecipes,
  addRecipe,
  changeRecipeName,
  changeRecipeDescription,
  changeRecipeSource,
  changeRecipeText,
  changeAllowedOn
} from "../../state/actions/RecipeActions";
import { AnyARecord } from "dns";
import { AnyAction } from "redux-promise-middleware-actions/lib/actions";
import { Dispatch } from "redux";
import { Recipe } from "../../model/Recipe";

const mapStateToProps = (state: State): RecipeListProps => ({
  loading: state.recipe.loading,
  recipies: state.recipe.recipies,
  formRecipe: state.recipe.formRecipe,
  page: state.recipe.page,
  pages: state.recipe.pages
});

const mapDispatchToProps = (dispatch: Dispatch): RecipeListDispatch => ({
  onPageChange: (page: number) => {
    loadRecipes(dispatch, page - 1);
  },
  onAddNewRecipe: (recipe: Recipe) => {
    addRecipe(dispatch, recipe);
  },
  onRecipeNameChange: (newName: string) => {
    dispatch(changeRecipeName(newName));
  },
  onRecipeDescriptionChange: (newDescription: string) => {
    dispatch(changeRecipeDescription(newDescription));
  },
  onRecipeSourceChange: (newSource: string) => {
    dispatch(changeRecipeSource(newSource));
  },
  onRecipeRecipeTextChange: (newRecipeText: string) => {
    dispatch(changeRecipeText(newRecipeText));
  },
  onRecipeDayInWeekChange: (newDayInWeek: DayInWeek) => {
    dispatch(changeAllowedOn(newDayInWeek));
  }
});

export const RecipeListComponentConnted: ComponentType = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeListComponent);
