import {Recipe} from "./Recipe";

export type Suggestion = Readonly<{
    forDay:Date
    recipe:Recipe
}>