import { Recipe } from "./Recipe";

export type Suggestion = Readonly<{
  date: Date;
  recipe: Recipe;
}>;
