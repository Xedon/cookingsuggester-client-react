import React from "react";
import ReactDOM from "react-dom";

import 'semantic-ui-css/semantic.min.css'

import {I18nextProvider, initReactI18next} from "react-i18next";
import i18next from "i18next";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "de",
  defaultNS: "common", // language to use
  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    de: {
      common: common_de
    }
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
