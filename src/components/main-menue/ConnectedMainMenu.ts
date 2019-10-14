import { State } from "../../state/States";
import { Dispatch } from "redux";
import { Routes } from "../../model/Routes";
import { connect } from "react-redux";
import MainMenu, { MainMenuDispatch, MainMenuProps } from "./MainMenu";
import { push } from "connected-react-router";
import { ComponentType } from "react";

const mapStateToProp = (state: State): MainMenuProps => ({});

const mapDispatchToProp = (dispatch: Dispatch): MainMenuDispatch => ({
  onRouteClick: (route: Routes) => dispatch(push(route.toString()))
});

const ConnectedMainMenu: ComponentType = connect(
  mapStateToProp,
  mapDispatchToProp
)(MainMenu);

export default ConnectedMainMenu;
