import actionCreatorFactory from "typescript-fsa";
import { Recipe } from "../../model/Recipe";
import { RecipeResponseResult } from "../../model/RecipesResponse";
import wrapAsyncWorker from "../../typing/WrapAsyncWorker";
import { DayInWeek } from "../../model/DayInWeek";
import { reject } from "q";

const actionCreator = actionCreatorFactory("recipe");

export const addRecipeAction = actionCreator.async<Recipe, void, Response>(
  "ADD"
);
export const addRecipe = wrapAsyncWorker(addRecipeAction, recipe =>
  fetch("http://localhost:8080/api/v1/recipes", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipe)
  }).then((resp: Response) =>
    resp.status !== 201 ? reject("Cant add Recipe") : undefined
  )
);

export const changeRecipe = actionCreator<Recipe>("CHANGE");
export const removeRecipe = actionCreator<bigint>("REMOVE");

export const loadRecipesAction = actionCreator.async<
  number,
  RecipeResponseResult,
  Response
>("LOAD_RECIPES");

export const loadRecipes = wrapAsyncWorker(loadRecipesAction, page =>
  fetch("http://localhost:8080/api/v1/recipes?page=" + page).then(
    (response: Response) =>
      response.status === 200 ? response.json() : reject("Can not load recipes")
  )
);

export const resetRecipeForm = actionCreator<void>("RESET_RECIPE_FORM");
export const changeRecipeName = actionCreator<string>("CHANGE_NAME");
export const changeRecipeDescription = actionCreator<string>(
  "CHANGE_DESCRIPTION"
);
export const changeRecipeSource = actionCreator<string>("CHANGE_SOURCE");
export const changeRecipeText = actionCreator<string>("CHANGE_TEXT");
export const changeAllowedOn = actionCreator<DayInWeek>("CHANGE_ALLOWED_ON");
