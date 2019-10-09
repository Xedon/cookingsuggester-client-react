import * as React from "react";
import {Trans} from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const HomeComponent: React.FunctionComponent = () => (
  <Container>
    <Row>
      <Col className="text-center">
        <Trans i18nKey="home.description"></Trans>
      </Col>
    </Row>
  </Container>
);
