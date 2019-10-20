import { RouterState } from "connected-react-router";
import { Recipe } from "../model/Recipe";
import { DayInWeek } from "../model/DayInWeek";
import { RemoteResourceLink } from "../model/RemoteResourceLink";
import { strict } from "assert";
import { Suggestion } from "../model/Suggestion";
import { SuggestionScope } from "../model/SuggestionScope";

export type State = Readonly<{
  global: GlobalState | undefined;
  router: RouterState;
  recipe: RecipeState;
  suggestion: SuggestionState;
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

export type SuggestionState = Readonly<{
  loading: boolean;
  loadingError: String;
  suggestions: Array<Suggestion>;
  page: number;
  pages: number;
}>;

const initialSuggestionArray: Array<Suggestion> = [];
export const initialSuggestionState: SuggestionState = {
  suggestions: initialSuggestionArray,
  page: 0,
  pages: 0,
  loading: false,
  loadingError: ""
};

const initialRecipeArray: Array<Recipe & RemoteResourceLink> = [];

export const initialRecipeState: RecipeState = {
  recipies: initialRecipeArray,
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
