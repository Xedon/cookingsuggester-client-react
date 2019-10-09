import {compose} from "redux";

declare global {
  export interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose | undefined;
  }
}
