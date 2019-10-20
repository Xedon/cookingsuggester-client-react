import { Recipe } from "./Recipe";
import { RemoteResourceLink } from "./RemoteResourceLink";
import { Suggestion } from "./Suggestion";

export type SuggestionResponse = Readonly<{
  content: Array<Suggestion>;
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}>;
