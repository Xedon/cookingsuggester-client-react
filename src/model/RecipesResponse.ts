import { Recipe } from "./Recipe";
import { RemoteResourceLink } from "./RemoteResourceLink";

export type RecipeResponseResult = Readonly<{
  _embedded: {
    recipes: Array<Recipe & RemoteResourceLink>;
  };
  _links: {
    self: {
      href: String;
      templated: Boolean;
    };
    profile: {
      href: String;
    };
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}>;
