import * as React from "react";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import {
  Button,
  Dimmer,
  Loader,
  Message,
  Pagination,
  Popup,
  Table
} from "semantic-ui-react";
import { DayInWeek } from "../../model/DayInWeek";
import { Suggestion } from "../../model/Suggestion";
import { SuggestionScope } from "../../model/SuggestionScope";
import { SuggestionScopeSelect } from "./SuggestionScopeSelect";

export interface SuggestionListProps {
  suggestionScope: SuggestionScope;
  loading: boolean;
  loadingError: String;
  suggestions: Array<Suggestion>;
  page: number;
  pages: number;
}

export interface SuggestionListDispatch {
  onPageChange: (page: number) => void;
  onDeleteSuggestion: (recipe: Suggestion) => void;
  onSuggestionScopeChange: (suggestionScope: SuggestionScope) => void;
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
        <SuggestionScopeSelect
          selectedScope={props.suggestionScope}
          onSelectScope={props.onSuggestionScopeChange}
        />
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
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.suggestions.map((element, key) => (
              <Popup
                content={element.recipe.recipeText}
                trigger={
                  <Table.Row>
                    <Table.Cell>{element.date.toLocaleDateString()}</Table.Cell>
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
                    <Table.Cell width="1">
                      <Button
                        icon="trash"
                        color="red"
                        onClick={() => props.onDeleteSuggestion(element)}
                      />
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
