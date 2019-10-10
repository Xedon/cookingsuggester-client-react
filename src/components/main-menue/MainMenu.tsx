import React from "react";
import {Menu} from "semantic-ui-react";
import {Routes} from "../../model/Routes";
import {Trans} from "react-i18next";

export interface MainMenuProps {}

export interface MainMenuDispatch {
  onRouteClick: (route: Routes) => void;
}

export type Props = MainMenuProps & MainMenuDispatch;

const MainMenu: React.FunctionComponent<Props> = props => (
  <Menu widths={"3"} attached={"top"}>
    <Menu.Item
      fitted={"horizontally"}
      onClick={() => props.onRouteClick(Routes.home)}
    >
      <Trans i18nKey="home.title" />
    </Menu.Item>
    <Menu.Item
      fitted={"horizontally"}
      onClick={() => props.onRouteClick(Routes.recipe)}
    >
      <Trans i18nKey="recipe.title" />
    </Menu.Item>
    <Menu.Item
      fitted={"horizontally"}
      onClick={() => props.onRouteClick(Routes.suggester)}
    >
      <Trans i18nKey="suggester.title" />
    </Menu.Item>
  </Menu>
);

export default MainMenu;
