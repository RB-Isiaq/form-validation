import { inputs } from "../../components/inputs";
import FormInput from "../../components/FormInput";
import "./Home.scss";
import { useState, useEffect } from "react";

const Home = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  const [emptyInputFields, setEmptyInputFields] = useState(true);

  useEffect(() => {
    const allInputValues = Object.values(formValues).every(
      (inputValue) => inputValue.length > 0
    );

    setEmptyInputFields(!allInputValues);
  }, [formValues]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formInput = new FormData(e.target);
    const formInputValues = Object.fromEntries(formInput.entries());
    console.log(formInputValues);
    console.log(formValues);
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <div className="app">
      <form className="home" onSubmit={submitHandler} data-testid="form">
        <h1>REGISTER</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            pattern={
              input.name === "confirmPassword"
                ? formValues.password
                : input.pattern
            }
            value={formValues[input.name]}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          data-testid="buttonId"
          disabled={emptyInputFields}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
