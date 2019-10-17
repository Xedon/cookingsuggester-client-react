import { Reducer } from "redux";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import {
  loadRecipes,
  loadRecipesAction,
  addRecipeAction,
  changeRecipeName,
  changeRecipeDescription,
  changeRecipeText,
  changeRecipeSource,
  changeAllowedOn,
  resetRecipeForm
} from "../actions/RecipeActions";
import { RecipeState, initialRecipeState } from "../States";
import { Action } from "history";
import promise, { FluxStandardAction } from "redux-promise-middleware";
import { routerActions } from "connected-react-router";
import { statement } from "@babel/template";
import { DayInWeek } from "../../model/DayInWeek";

export const reducer = reducerWithInitialState(initialRecipeState)
  .case(loadRecipesAction.started, (state, payload) => ({
    ...state,
    loading: true
  }))
  .case(loadRecipesAction.done, (state, payload) => ({
    ...state,
    loading: false,
    page: payload.result.page.number,
    pages: payload.result.page.totalPages,
    recipies: payload.result._embedded.recipes
  }))
  .case(loadRecipesAction.failed, (state, payload) => ({
    ...state,
    loading: false,
    loadingError: "Failed to load Recipe/s",
    page: 0,
    pages: 0,
    recipies: []
  }))
  .case(addRecipeAction.started, state => ({
    ...state,
    loading: true
  }))
  .case(addRecipeAction.done, state => ({
    ...state,
    loading: false
  }))
  .case(addRecipeAction.failed, (state, payload) => ({
    ...state,
    loading: false,
    loadingError: "Failed to add Recipe"
  }))
  .case(resetRecipeForm, state => ({
    ...state,
    formRecipe: {
      allowedOn: DayInWeek.Both,
      description: "",
      foodTypes: [],
      name: "",
      recipe_text: "",
      source: ""
    }
  }))
  .case(changeRecipeName, (state, payload) => ({
    ...state,
    formRecipe: {
      ...state.formRecipe,
      name: payload
    }
  }))
  .case(changeRecipeDescription, (state, payload) => ({
    ...state,
    formRecipe: {
      ...state.formRecipe,
      description: payload
    }
  }))
  .case(changeRecipeSource, (state, payload) => ({
    ...state,
    formRecipe: {
      ...state.formRecipe,
      source: payload
    }
  }))
  .case(changeRecipeText, (state, payload) => ({
    ...state,
    formRecipe: {
      ...state.formRecipe,
      recipe_text: payload
    }
  }))
  .case(changeAllowedOn, (state, payload) => ({
    ...state,
    formRecipe: {
      ...state.formRecipe,
      allowedOn: payload
    }
  }))
  .build();
