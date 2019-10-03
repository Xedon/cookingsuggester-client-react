import * as React from "react";
import {Trans} from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class Home extends React.Component<any, any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Container>
                <Row>
                    <Col className="text-center">
                        <Trans i18nKey="home.description"></Trans>
                    </Col>
                </Row>
            </Container>
        );
    }
}


