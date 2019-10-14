import { type } from "os";

export type RemoteResourceLink = Readonly<{
  _links: {
    self: {
      href: String;
    };
  };
}>;
