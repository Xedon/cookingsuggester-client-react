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
  InputOnChangeData,
  Dimmer,
  Loader,
  Dropdown,
  Message
} from "semantic-ui-react";
import { Trans, useTranslation } from "react-i18next";
import "./RecipeListComponent.css";
import { Recipe } from "../../model/Recipe";
import { DayInWeek } from "../../model/DayInWeek";
import { FoodType } from "../../model/FoodType";
import { TFunction } from "i18next";

export interface RecipeListProps {
  loading: boolean;
  loadingError: String;
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
  onRecipeDayInWeekChange: (newDayInWeek: DayInWeek) => void;
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
  const dayInWeekOptions = [
    {
      key: DayInWeek.WorkDay,
      value: DayInWeek.WorkDay,
      text: t("recipe.sceduling.workday") as string
    },
    {
      key: DayInWeek.WeekendDay,
      value: DayInWeek.WeekendDay,
      text: t("recipe.sceduling.weekendday") as string
    },
    {
      key: DayInWeek.Both,
      value: DayInWeek.Both,
      text: t("recipe.sceduling.both") as string
    }
  ];
  return (
    <Container style={formStyle}>
      {props.loadingError.length > 0 ? (
        <Message negative>{props.loadingError}</Message>
      ) : (
        ""
      )}
      <Form onSubmit={(event, form) => props.onAddNewRecipe(props.formRecipe)}>
        <Form.Input
          type="text"
          required
          label={t("recipe.form.name")}
          onChange={(event, data) => props.onRecipeNameChange(data.value)}
          error={props.formRecipe.name ? false : t("recipe.form.error.name")}
        ></Form.Input>
        <Form.TextArea
          label={t("recipe.form.description")}
          required
          error={
            props.formRecipe.description
              ? false
              : t("recipe.form.error.description")
          }
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
        <Form.Group>
          <Form.Dropdown
            label={t("recipe.form.dayinweek")}
            placeholder={t("recipe.sceduling.placeholder")}
            selection
            search
            onChange={(event, data) =>
              props.onRecipeDayInWeekChange(data.value as DayInWeek)
            }
            options={dayInWeekOptions}
            defaultValue={DayInWeek.Both}
          />
        </Form.Group>
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
      <Dimmer.Dimmable>
        <Dimmer active={props.loading}>
          <Loader />
        </Dimmer>
        {RecipeTable(t, props, dayInWeekOptions)}
      </Dimmer.Dimmable>
    </Container>
  );
};

const RecipeTable = (
  t: TFunction,
  props: Props,
  dayInWeekOptions: Array<{ key: DayInWeek; value: DayInWeek; text: string }>
) => {
  return (
    <Table celled textAlign={"center"}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell content={t("recipe.form.name")}></Table.HeaderCell>
          <Table.HeaderCell
            content={t("recipe.form.description")}
          ></Table.HeaderCell>
          <Table.HeaderCell
            content={t("recipe.form.source")}
          ></Table.HeaderCell>
          <Table.HeaderCell
            content={t("recipe.form.dayinweek")}
          ></Table.HeaderCell>
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
                <Table.Cell>
                  {
                    dayInWeekOptions.find(
                      elem => elem.key === element.allowedOn
                    )!.text
                  }
                </Table.Cell>
              </Table.Row>
            }
          />
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan={4}>
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
  );
};
