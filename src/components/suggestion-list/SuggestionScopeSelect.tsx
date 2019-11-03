import { Select, DropdownItemProps } from "semantic-ui-react";
import { SuggestionScope } from "../../model/SuggestionScope";
import React from "react";

interface Props {
  onSelectScope(scope: SuggestionScope): void;
  selectedScope: SuggestionScope;
}

export const SuggestionScopeSelect = (props: Props) => {
  const options: DropdownItemProps[] = [];
  for (let i = -3; i < 4; i++) {
    let scope = new SuggestionScope(i);
    options.push({
      key: scope.toLocalString(),
      value: scope.toLocalString(),
      text: scope.toLocalString(),
      obj: scope
    });
  }
  return (
    <Select
      options={options}
      onChange={(e, data) => {
        props.onSelectScope(
          options.find(option => option.value === data.value)!.obj
        );
      }}
      value={props.selectedScope.toLocalString()}
    ></Select>
  );
};
