import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import { TestId } from "../../components/inputs";

test("email placeholder should be in the document", () => {
  render(<Home />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeInTheDocument();
});
test("email placeholder should be required", () => {
  render(<Home />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeRequired();
});
test("dob should not be required", () => {
  render(<Home />);
  const dobInput = screen.getByLabelText("Date of Birth");
  expect(dobInput).not.toBeRequired();
});
test("button should have text content", () => {
  render(<Home />);
  const buttonEl = screen.getByTestId("buttonId");
  expect(buttonEl).toHaveTextContent("Submit");
});
test("button should be disabled", () => {
  render(<Home />);
  const buttonEl = screen.getByTestId("buttonId");
  expect(buttonEl).toBeDisabled();
});
// test("button should be enabled, if all input fields are not empty", () => {
//   render(<Home />);
//   const buttonEl = screen.getByTestId("buttonId");
//   const allFormInputs = screen.getAllByTestId(TestId.FORM_INPUT);
//   fireEvent.change(allFormInputs, { target: { value: "testing again" } });
//   expect(buttonEl).toBeEnabled();
// });
