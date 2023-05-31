import { useState } from "react";
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
  // React.HTMLAttributes<HTMLInputElement>.style?: React.CSSProperties | undefined

  return (
    <div className="formInput">
      <label htmlFor={id}>{label} </label>
      <input
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
