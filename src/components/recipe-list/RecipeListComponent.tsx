import * as React from "react";
import Container from "react-bootstrap/Container";
import {
  Label,
  Form,
  Input,
  Button,
  Icon,
  Table,
  Popup
} from "semantic-ui-react";
import { Trans, useTranslation } from "react-i18next";
import "./RecipeListComponent.css";
import { Recipe } from "../../model/Recipe";

interface RecipeListProps {
  recipies: Array<Recipe>;
}

interface RecipeListDispatch {}

type Props = RecipeListProps & RecipeListDispatch;

const formStyle: React.CSSProperties = {
  border: "whitesmoke",
  borderStyle: "solid",
  borderWidth: "15px",
  borderRadius: "2px",
  padding: "10px"
};

const inputStyle: React.CSSProperties = {
  width: "120px"
};

export const RecipeListComponent: React.FunctionComponent<Props> = function(
  props: Props
) {
  const { t } = useTranslation();
  return (
    <Container style={formStyle}>
      <Form>
        <Form.Input type="text" label={t("recipe.form.name")}></Form.Input>
        <Form.TextArea label={t("recipe.form.description")} />
        <Form.Input type="text" label={t("recipe.form.source")}></Form.Input>
        <Form.Input
          type="text"
          label={t("recipe.form.recipe_text")}
        ></Form.Input>
        <Form.Group inline>
          <Form.Button color={"green"}>
            <Icon name="add"></Icon>
            {t("recipe.form.submitButton")}
          </Form.Button>
          <Form.Button color={"grey"}>
            <Icon name="remove"></Icon>
            {t("recipe.form.resetButton")}
          </Form.Button>
        </Form.Group>
      </Form>
      <Table celled textAlign={"center"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Trans i18nKey="recipe.form.name"></Trans>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Trans i18nKey="recipe.form.description"></Trans>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Trans i18nKey="recipe.form.source"></Trans>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.recipies.map(element => (
            <Popup
              content={element.recipe_text}
              trigger={
                <Table.Row>
                  <Table.Cell>{element.name}</Table.Cell>
                  <Table.Cell>{element.description}</Table.Cell>
                  <Table.Cell>{element.source}</Table.Cell>
                </Table.Row>
              }
            />
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};
