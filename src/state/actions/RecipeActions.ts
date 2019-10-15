import actionCreatorFactory from "typescript-fsa";
import { Recipe } from "../../model/Recipe";
import { RecipeState } from "../States";
import { createAsyncAction } from "redux-promise-middleware-actions";
import { RecipeResponseResult } from "../../model/RecipesResponse";
import wrapAsyncWorker from "../../typing/WrapAsyncWorker";
import { DayInWeek } from "../../model/DayInWeek";

const actionCreator = actionCreatorFactory("recipe");

export const addRecipeAction = actionCreator.async<Recipe, void, {}>("ADD");
export const addRecipe = wrapAsyncWorker(addRecipeAction, recipe =>
  fetch("http://localhost:8080/api/v1/recipes", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipe)
  }).then()
);

export const changeRecipe = actionCreator<Recipe>("CHANGE");
export const removeRecipe = actionCreator<bigint>("REMOVE");

export const loadRecipesAction = actionCreator.async<
  number,
  RecipeResponseResult,
  {}
>("LOAD_RECIPES");

export const loadRecipes = wrapAsyncWorker(loadRecipesAction, page =>
  fetch("http://localhost:8080/api/v1/recipes?page=" + page).then(
    (response: Response) => response.json()
  )
);

export const changeRecipeName = actionCreator<string>("CHANGE_NAME");
export const changeRecipeDescription = actionCreator<string>(
  "CHANGE_DESCRIPTION"
);
export const changeRecipeSource = actionCreator<string>("CHANGE_SOURCE");
export const changeRecipeText = actionCreator<string>("CHANGE_TEXT");
export const changeAllowedOn = actionCreator<DayInWeek>("CHANGE_ALLOWED_ON");
