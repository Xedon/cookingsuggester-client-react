import React from "react";
import "./App.css";
import { Trans } from "react-i18next";
import { HomeComponent } from "./sites/HomeComponent";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { reducer } from "./state/reducer/root";
import { Routes } from "./model/Routes";
import {
  ConnectedRouter,
  push,
  routerMiddleware
} from "connected-react-router";

import { history } from "./state/HistoryStore";
import { RecipeListComponent } from "./components/recipe-list/RecipeListComponent";
import { SuggesterComponent } from "./sites/SuggesterComponent";
import ConnectedMainMenu from "./components/main-menue/ConnectedMainMenu";
import { RecipeListComponentConnted } from "./components/recipe-list/RecipeListComponentConnected";
import { recipeMiddleware } from "./middleware/RecipeMiddleware";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancers = composeEnhancers(
  applyMiddleware(routerMiddleware(history), recipeMiddleware)
);

const store = createStore(reducer, enhancers);
const customContext = React.createContext(null);
const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <h1 style={{ textAlign: "center" }}>
        <Trans i18nKey="app.title" />
      </h1>
      <ConnectedMainMenu />
      <Switch>
        <Route exact path="/">
          <HomeComponent />
        </Route>
        <Route path={Routes.home}>
          <HomeComponent />
        </Route>
        <Route path={Routes.recipe}>
          <RecipeListComponentConnted />
        </Route>
        <Route path={Routes.suggester}>
          <SuggesterComponent />
        </Route>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
