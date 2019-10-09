import actionCreatorFactory from "typescript-fsa";
import {Recipe} from "../../model/Recipe";


const actionCreator = actionCreatorFactory('recipe');

export const addRecipe = actionCreator<Recipe>('ADD_RECIPE');
export const changeRecipe = actionCreator<Recipe>('CHANGE_RECIPE');
export const removeRecipe = actionCreator<bigint>('REMOVE_RECIPE');

export const loadRecipes = actionCreator('LOAD_RECIPES');