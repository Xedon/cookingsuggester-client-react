import { Recipe } from "./Recipe";
import { StandardLonghandProperties } from "csstype";

export type Suggestion = Readonly<{
  id: number;
  date: Date;
  recipe: Recipe;
}>;
