import { useState } from "react";
import { TestId } from "./inputs";
import "./FormInput.scss";

const FormInput: React.FC<{
  label: string;
  id: string;
  error: string;
  value: string;
  onChange: (arg: React.SyntheticEvent) => void;
  pattern: string | undefined;
  required: boolean;
}> = (props) => {
  const [touched, setTouched] = useState(false);
  const [blur, setBlur] = useState(false);
  const [valid, setValid] = useState(true);
  const { label, id, error, value, onChange, pattern, ...inputAttributes } =
    props;
  const handleTouched = () => {
    if (touched) setBlur(true);
  };
  const handleFocused = () => {
    setTouched(true);
  };
  const handleInvalidStyle = (e: any) => {
    setValid(e.target.validity.valid);
  };

  const inputError = !valid && blur;

  return (
    <div className="formInput" data-testid={TestId.FORM_INPUT_CONTAINER}>
      <label htmlFor={id} data-testid={TestId.FORM_LABEL}>
        {label}{" "}
      </label>
      <input
        data-testid={TestId.FORM_INPUT}
        {...inputAttributes}
        id={id}
        value={value}
        onChange={onChange}
        pattern={pattern}
        onBlur={handleTouched}
        onFocus={handleFocused}
        onInput={handleInvalidStyle}
        style={{ border: inputError ? "1px solid red" : "0" }}
      />
      {!valid && blur && <p>{error}</p>}
    </div>
  );
};

export default FormInput;
