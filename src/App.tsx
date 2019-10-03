import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Trans, withTranslation} from "react-i18next";
import {Home} from "./sites/Home";

export class App extends React.Component<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <h1><Trans i18nKey="app.description"/></h1>
                <Tabs id="action-tab" defaultActiveKey="home">
                    <Tab title={this.props.t("home.title")} eventKey="home">
                        <Home/>
                    </Tab>
                    <Tab title={this.props.t("recipe.title")} eventKey="recipe">
                    </Tab>
                    <Tab title={this.props.t("suggester.title")} eventKey="suggester">
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default withTranslation()(App);
