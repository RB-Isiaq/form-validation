import { inputs } from "../../components/inputs";
import FormInput from "../../components/FormInput";
import "./Home.scss";
import { useState } from "react";

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
      <form className="home" onSubmit={submitHandler}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
