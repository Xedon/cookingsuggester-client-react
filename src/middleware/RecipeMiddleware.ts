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
import { loadSuggestionFor } from "../state/actions/SuggestionActions";
import { SuggestionScope } from "../model/SuggestionScope";

export const recipeMiddleware: Middleware<{}, State> = store => next => (
  action: LocationChangeAction
) => {
  if (action.type === LOCATION_CHANGE) {
    if (action.payload.location.pathname === Routes.recipe)
      loadRecipes(store.dispatch, store.getState().recipe.page);
    else if (action.payload.location.pathname === Routes.suggester) {
      var to: Date = new Date();
      to.setDate(to.getDate() + 7);
      loadSuggestionFor(store.dispatch, new SuggestionScope());
    }
  } else if (addRecipeAction.done.match(action)) {
    store.dispatch(resetRecipeForm());
    loadRecipes(store.dispatch, store.getState().recipe.page);
  }
  next(action);
};
