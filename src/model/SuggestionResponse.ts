import { Recipe } from "./Recipe";
import { RemoteResourceLink } from "./RemoteResourceLink";

export type SuggestionResponse = Readonly<{
  _embedded: {
    suggestions: [
      {
        date: Date;
        _embedded: {
          recipe: Recipe & RemoteResourceLink;
        };
        _links: {
          self: {
            href: string;
          };
          cookingSuggestion: {
            href: string;
          };
          recipe: {
            href: string;
            templated: boolean;
          };
        };
      }
    ];
  };
  _links: {
    self: {
      href: string;
      templated: boolean;
    };
    profile: {
      href: string;
    };
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}>;
