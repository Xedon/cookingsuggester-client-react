import { State } from "../state/States";
import { LocationChangeAction, LOCATION_CHANGE } from "connected-react-router";
import { Middleware } from "redux";
import { Routes } from "../model/Routes";
import {
  loadRecipesAction,
  loadRecipes,
  addRecipeAction,
  resetRecipeForm
} from "../state/actions/RecipeActions";

export const recipeMiddleware: Middleware<{}, State> = store => next => (
  action: LocationChangeAction
) => {
  if (
    action.type === LOCATION_CHANGE &&
    action.payload.location.pathname === Routes.recipe
  ) {
    loadRecipes(store.dispatch, store.getState().recipe.page);
  } else if (addRecipeAction.done.match(action)) {
    store.dispatch(resetRecipeForm());
    loadRecipes(store.dispatch, store.getState().recipe.page);
  }
  next(action);
};
