import { Reducer } from "redux";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { loadRecipes } from "../actions/RecipeActions";
import { RecipeState, initialRecipeState } from "../State";
import { Action } from "history";
import promise, { FluxStandardAction } from "redux-promise-middleware";

export const reducer = reducerWithInitialState(initialRecipeState)
  .case(
    loadRecipes.started,
    (state, payload) => ({
        ...state
        loadedRecipes = payload._embedded["/recipes"
    ]})
  )
  .build();
