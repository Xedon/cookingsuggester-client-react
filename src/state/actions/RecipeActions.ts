import actionCreatorFactory from "typescript-fsa";
import { Recipe } from "../../model/Recipe";
import { RecipeState } from "../State";
import { createAsyncAction } from "redux-promise-middleware-actions";
import { RecipeResponseResult } from "../../model/RecipesResponse";

const actionCreator = actionCreatorFactory("recipe");

export const addRecipe = actionCreator<Recipe>("ADD_RECIPE");
export const changeRecipe = actionCreator<Recipe>("CHANGE_RECIPE");
export const removeRecipe = actionCreator<bigint>("REMOVE_RECIPE");

export const beginLoadRecipes = actionCreator("CHANGE_RECIPES");

export const loadRecipes = actionCreator.async<
  RecipeResponseResult,
  RecipeState,
  {}
>("LOAD_RECIPES");
