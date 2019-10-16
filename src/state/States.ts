import { RouterState } from "connected-react-router";
import { Recipe } from "../model/Recipe";
import { DayInWeek } from "../model/DayInWeek";
import { RemoteResourceLink } from "../model/RemoteResourceLink";
import { strict } from "assert";

export type State = Readonly<{
  global: GlobalState | undefined;
  router: RouterState;
  recipe: RecipeState;
}>;

export type GlobalState = Readonly<{}>;

export type RecipeState = Readonly<{
  loading: boolean;
  loadingError: String;
  recipies: Array<Recipe & RemoteResourceLink>;
  formRecipe: Recipe;
  page: number;
  pages: number;
}>;

const initialArray: Array<Recipe & RemoteResourceLink> = [];

export const initialRecipeState: RecipeState = {
  recipies: initialArray,
  page: 0,
  pages: 0,
  loading: false,
  loadingError: "",
  formRecipe: {
    name: "",
    description: "",
    source: "",
    recipe_text: "",
    foodTypes: [],
    allowedOn: DayInWeek.Both
  }
};
