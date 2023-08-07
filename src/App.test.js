import { render, screen } from "@testing-library/react";
import App from "./App";

test("shows a form with the form element in the document", () => {
  render(<App />);
  const formText = screen.getByText(/register/i);
  expect(formText).toBeInTheDocument();
});
