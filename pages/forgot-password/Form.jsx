import { useState } from "react";
import { ValidateEmail } from "../signup/Validations";

import Input from "../login/Input";
import Button from "../../components/Button";

import classes from "./ForgotForm.module.css";
const Form = (props) => {
  const [form, setForm] = useState({
    email: "",
    emailIsValid: false,
    emailIsFocus: false,
  });

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });
    const { passwordIsValid } = form;
    const isValid = ValidateEmail(e.target.value);

    if (passwordIsValid && isValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };

  const emailOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, emailIsFocus: true };
    });

    const isValid = ValidateEmail(form.email);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, emailIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, emailIsValid: false };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to backend
    props.onSubmit({
      email: form.email,
    });

    // Clearing the input fields
    setForm({
      email: "",
      emailIsValid: false,
      emailIsFocus: false,
    });
  };

  return (
    <form className={classes.forgot__form} onSubmit={submitHandler}>
      <Input
        id="email"
        label="Email"
        type="email"
        invalid={!form.emailIsValid && form.emailIsFocus ? "invalid" : ""}
        placeholder="example@email.com"
        value={form.email}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <pre className={classes.invalid__input}>Enter a valid email.</pre>
      )}

      <div className={classes.btn__box}>
        <Button id="btn__submit" type="submit" className={classes.button}>
          Continue
        </Button>
      </div>
    </form>
  );
};
export default Form;
