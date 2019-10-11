import { RouterState } from "connected-react-router";
import { Recipe } from "../model/Recipe";

export type State = Readonly<{
  global: GlobalState | undefined;
  router: RouterState;
  recipe: RecipeState;
}>;

export type GlobalState = Readonly<{}>;

export type RecipeState = Readonly<{
  loadedRecipes: Array<Recipe>;
  pages: number;
  page: number;
}>;

const initialArray: Array<Recipe> = [];

export const initialRecipeState = {
  loadedRecipes: initialArray,
  page: 0,
  pages: 0
};
