import { State } from "../state/States";
import { LocationChangeAction, LOCATION_CHANGE } from "connected-react-router";
import { Middleware } from "redux";
import { Routes } from "../model/Routes";
import {
  loadRecipesAction,
  loadRecipes,
  addRecipeAction
} from "../state/actions/RecipeActions";

export const recipeMiddleware: Middleware<{}, State> = store => next => (
  action: LocationChangeAction
) => {
  if (
    (action.type === LOCATION_CHANGE &&
      action.payload.location.pathname === Routes.recipe) ||
    addRecipeAction.done.match(action)
  ) {
    loadRecipes(store.dispatch, store.getState().recipe.page);
  }
  next(action);
};
