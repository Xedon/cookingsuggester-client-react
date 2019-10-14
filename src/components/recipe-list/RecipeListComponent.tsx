import * as React from "react";
import Container from "react-bootstrap/Container";
import {
  Label,
  Form,
  Input,
  Button,
  Icon,
  Table,
  Popup,
  Pagination,
  InputOnChangeData
} from "semantic-ui-react";
import { Trans, useTranslation } from "react-i18next";
import "./RecipeListComponent.css";
import { Recipe } from "../../model/Recipe";

export interface RecipeListProps {
  loading: boolean;
  recipies: Array<Recipe>;
  formRecipe: Recipe;
  page: number;
  pages: number;
}

export interface RecipeListDispatch {
  onPageChange: (page: number) => void;
  onAddNewRecipe: (recipe: Recipe) => void;
  onRecipeNameChange: (newName: string) => void;
  onRecipeDescriptionChange: (newDescription: string) => void;
  onRecipeSourceChange: (newSource: string) => void;
  onRecipeRecipeTextChange: (newRecipeText: string) => void;
}

export type Props = RecipeListProps & RecipeListDispatch;

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
      <Form onSubmit={() => props.onAddNewRecipe(props.formRecipe)}>
        <Form.Input
          type="text"
          label={t("recipe.form.name")}
          onChange={(event, data) => props.onRecipeNameChange(data.value)}
        ></Form.Input>
        <Form.TextArea
          label={t("recipe.form.description")}
          onChange={(event, data) =>
            props.onRecipeDescriptionChange(data.value as string)
          }
        />
        <Form.Input
          type="text"
          label={t("recipe.form.source")}
          onChange={(event, data) => props.onRecipeSourceChange(data.value)}
        />
        <Form.TextArea
          label={t("recipe.form.recipe_text")}
          onChange={(event, data) =>
            props.onRecipeRecipeTextChange(data.value as string)
          }
        ></Form.TextArea>
        <Form.Group inline>
          <Form.Button type="submit" color={"green"}>
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
          {props.recipies.map((element, key) => (
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
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan={3}>
              <Pagination
                activePage={props.pages + 1}
                totalPages={props.pages}
                onPageChange={(pParams, data) =>
                  props.onPageChange(data.activePage as number)
                }
              ></Pagination>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  );
};
