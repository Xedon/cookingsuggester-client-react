import { RouterState } from "connected-react-router";
import { Recipe } from "../model/Recipe";

export type State = Readonly<{
  global: GlobalState | undefined;
  router: RouterState;
  recipe: RecipeState;
}>;

export type GlobalState = Readonly<{}>;

export type RecipeState = Readonly<{
  loading: boolean;
  recipies: Array<Recipe>;
  formRecipe: Recipe;
  page: number;
  pages: number;
}>;

const initialArray: Array<Recipe> = [];

export const initialRecipeState: RecipeState = {
  recipies: initialArray,
  page: 0,
  pages: 0,
  loading: false,
  formRecipe: { name: "", description: "", source: "", recipe_text: "" }
};
