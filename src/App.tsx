import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const App: React.FC = () => {
    let homeTabTitle: string = "Home";
    let addRecipesTitle: string = "Recipes";
    let suggestionTitle = "Weekly Suggestions";
    return (
        <Container>
            <Row>
                <h1>Cocking suggester</h1>
            </Row>
            <Row>
                <Tabs id="action-tab">
                    <Tab title={homeTabTitle}>
                    </Tab>
                    <Tab title={addRecipesTitle}>
                    </Tab>
                    <Tab title={suggestionTitle}>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    );
}

export default App;
