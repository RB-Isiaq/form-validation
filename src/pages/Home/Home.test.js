import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("email placeholder should be in the document", () => {
  render(<Home />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl);
});
test("email placeholder should be required", () => {
  render(<Home />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeRequired;
});
test("dob should not be required", () => {
  render(<Home />);
  const dobInput = screen.findByRole("input");
  expect(dobInput).not.toBeRequired;
});
test("button should have text content", () => {
  render(<Home />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toHaveTextContent;
});
