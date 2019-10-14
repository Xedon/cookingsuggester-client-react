import { FoodType } from "./FoodType";
import { DayInWeek } from "./DayInWeek";

export type Recipe = Readonly<{
  id?: number;
  name: string;
  description: string;
  source: string;
  recipe_text: string;
  foodTypes: Array<FoodType>;
  allowedOn: DayInWeek;
}>;
