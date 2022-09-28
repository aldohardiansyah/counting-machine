import React from "react";
import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("Navbar: Title", () => {
  render(<App />);
  const navTitle = screen.getByText("Counting Machine");
  expect(navTitle).toBeInTheDocument();
});

test("Body", () => {
  render(<App />);
  const firstInput = screen.getByPlaceholderText("Input your first number");
  expect(firstInput).toBeInTheDocument();
  const secondInput = screen.getByPlaceholderText("Input your second number");
  expect(secondInput).toBeInTheDocument();
  const thirdInput = screen.getByPlaceholderText("Input your third number");
  expect(thirdInput).toBeInTheDocument();
});

describe("Form Check", () => {
  it("Do Sum no Check", async () => {
    render(<App />);
    const firstInput =  screen.getByTestId("firstNumber");
    user.type(firstInput, "10");

    const secondInput =  screen.getByTestId("secondNumber");
    user.type(secondInput, "2");

    const thirdInput =  screen.getByTestId("thirdNumber");
    user.type(thirdInput, "5");

    user.click(screen.getByTestId('calculateSum'));

    expect(screen.getByTestId('result')).toHaveTextContent('0');

  });


});
