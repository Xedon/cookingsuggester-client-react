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
import { DayInWeek } from "../../model/DayInWeek";
import { Suggestion } from "../../model/Suggestion";

export interface SuggestionListProps {
  loading: boolean;
  loadingError: String;
  suggestions: Array<Suggestion>;
  page: number;
  pages: number;
}

export interface SuggestionListDispatch {
  onPageChange: (page: number) => void;
  onDeleteSuggestion: (recipe: Suggestion) => void;
}

export type Props = SuggestionListProps & SuggestionListDispatch;

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

export const SuggestionListComponent: React.FunctionComponent<Props> = function(
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
      <Dimmer.Dimmable>
        <Dimmer active={props.loading}>
          <Loader />
        </Dimmer>
        <Table celled textAlign={"center"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                content={t("suggester.dateFor")}
              ></Table.HeaderCell>
              <Table.HeaderCell
                content={t("suggester.name")}
              ></Table.HeaderCell>
              <Table.HeaderCell
                content={t("suggester.description")}
              ></Table.HeaderCell>
              <Table.HeaderCell
                content={t("suggester.source")}
              ></Table.HeaderCell>
              <Table.HeaderCell
                content={t("suggester.dayinweek")}
              ></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.suggestions.map((element, key) => (
              <Popup
                content={element.recipe.recipe_text}
                trigger={
                  <Table.Row>
                    <Table.Cell>{element.date.toLocaleString()}</Table.Cell>
                    <Table.Cell>{element.recipe.name}</Table.Cell>
                    <Table.Cell>{element.recipe.description}</Table.Cell>
                    <Table.Cell>{element.recipe.source}</Table.Cell>
                    <Table.Cell>
                      {
                        dayInWeekOptions.find(
                          elem => elem.key === element.recipe.allowedOn
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
              <Table.HeaderCell colSpan={5}>
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
      </Dimmer.Dimmable>
    </Container>
  );
};
