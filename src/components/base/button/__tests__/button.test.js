import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeContextProvider } from "../../../../context/themeContext";
import Button from "../index";

test("Button renders correctly with default props", () => {
  const { getByText } = render(
    <ThemeContextProvider>
      <Button text="Click me" />
    </ThemeContextProvider>
  );

  const buttonElement = getByText("Click me");

  expect(buttonElement).toBeInTheDocument();
});

test("Button renders correctly with custom props", () => {
  const { getByText } = render(
    <ThemeContextProvider>
      <Button
        text="Submit"
        type="secondary"
        size="larg"
        marginTop={10}
        deActive={false}
      />
    </ThemeContextProvider>
  );

  const buttonElement = getByText("Submit");

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveStyle(`
    font-size: 26px;
    padding: 19px 27px;
    border-radius: 36px;
    color: rgb(255, 255, 255);
    background-color:  rgb(62, 63, 65);
  `);
});

test("Button handles click event correctly", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <ThemeContextProvider>
      <Button text="Click me" onClick={handleClick} />
    </ThemeContextProvider>
  );

  const buttonElement = getByText("Click me");
  fireEvent.click(buttonElement);

  expect(handleClick).toHaveBeenCalled();
});
