import { render, screen } from "@testing-library/react";
import FormInput from "./FormInput";
import { TestId } from "./inputs";

describe("render form input container", () => {
  describe("should be shown in the document", () => {
    it("shows the necessary form inputs and label", () => {
      render(<FormInput />);
      const FormInputEle = screen.getByTestId(TestId.FORM_INPUT_CONTAINER);
      expect(FormInputEle).toBeInTheDocument();
    });
  });
});
