import { jsx } from "@emotion/core";
import { render, fireEvent } from "@testing-library/react";
import { RecipeListComponent } from "../RecipeListComponent";
import { DayInWeek } from "../../../model/DayInWeek";
import React from "react";
/**@jsx */

beforeEach(() => {
  jest.mock("i18next", () => {
    useTranslation: () => {
      t: jest.fn((key: String) => key);
    };
  });
});

describe("Test RecipeListComponent", () => {
  it("Test form", () => {
    const onAddNewRecipe = jest.fn();
    const onPageChange = jest.fn();
    const onRecipeDayInWeekChange = jest.fn();
    const onRecipeDescriptionChange = jest.fn();
    const onRecipeNameChange = jest.fn();
    const onRecipeRecipeTextChange = jest.fn();
    const onRecipeSourceChange = jest.fn();
    const { container, getByDisplayValue } = render(
      <RecipeListComponent
        onAddNewRecipe={onAddNewRecipe}
        onPageChange={onPageChange}
        onRecipeDayInWeekChange={onRecipeDayInWeekChange}
        onRecipeDescriptionChange={onRecipeDescriptionChange}
        onRecipeNameChange={onRecipeNameChange}
        onRecipeRecipeTextChange={onRecipeRecipeTextChange}
        onRecipeSourceChange={onRecipeSourceChange}
        loading={false}
        loadingError={""}
        recipies={[]}
        page={0}
        pages={0}
        formRecipe={{
          name: "",
          recipe_text: "",
          description: "",
          source: "",
          allowedOn: DayInWeek.Both,
          foodTypes: []
        }}
      />
    );
  });
});
