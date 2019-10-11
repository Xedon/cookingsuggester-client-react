import { Recipe } from "./Recipe";

export type RecipeResponseResult = Readonly<{
  _embedded: {
    "/recipes": Array<Recipe>;
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
