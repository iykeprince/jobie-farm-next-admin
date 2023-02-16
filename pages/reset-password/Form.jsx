import { useState } from "react";

import { ValidatePassword } from "../signup/Validations";

import Input from "../Login/Input";
import Button from "../../components/Button";

import classes from "./ResetForm.module.css";
const Form = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordIcon] = useState(true);
  const [form, setForm] = useState({
    password: "",
    confirmpassword: "",
    passwordIsValid: false,
    confirmpasswordIsValid: false,
    confirmpasswordIsFocus: false,
  });

  const passwordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, password: e.target.value };
    });

    const { emailIsValid } = form;
    const isValid = ValidatePassword(e.target.value);

    if (emailIsValid && isValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };
  const confirmpasswordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, confirmpassword: e.target.value };
    });

    const { emailIsValid } = form;
    const isValid = e.target.value === form.password;

    if (emailIsValid && isValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct.

  const passwordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, passwordIsFocus: true };
    });

    const isValid = ValidatePassword(form.password);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, passwordIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, passwordIsValid: false };
      });
    }
  };

  const confirmpasswordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, passwordIsFocus: true };
    });

    const isValid = form.password === form.confirmpassword;
    if (isValid) {
      setForm((prev) => {
        return { ...prev, confirmpasswordIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, confirmpasswordIsValid: false };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to backend
    props.onSubmit({
      password: form.password,
      repeat_password: form.confirmpassword,
    });

    // Clearing the input fields
    setForm({
      password: "",
      confirmpassword: "",
      passwordIsValid: false,
      confirmpasswordIsValid: false,
      passwordIsFocus: false,
      confirmpasswordIsFocus: false,
    });
  };

  return (
    <form className={classes.reset__form} onSubmit={submitHandler}>
      <Input
        id="password"
        label="New Password"
        type={showPassword ? "text" : "password"}
        invalid={!form.passwordIsValid && form.passwordIsFocus ? "invalid" : ""}
        placeholder="e.g, Password@1234"
        value={form.password}
        onChange={passwordOnChangeHandler}
        onBlur={passwordOnBlurHandler}
        passwordIcon={passwordIcon}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      {form.passwordIsFocus && !form.passwordIsValid && (
        <pre className={classes.invalid__input}>
          MinLength(8), uppercase, lowercase, character, number
        </pre>
      )}
      <Input
        id="confirmpassword"
        label="Confirm New Password"
        type={showPassword ? "text" : "password"}
        invalid={
          !form.confirmpasswordIsValid && form.confirmpasswordIsFocus
            ? "invalid"
            : ""
        }
        placeholder="e.g, Password@1234"
        value={form.confirmpassword}
        onChange={confirmpasswordOnChangeHandler}
        onBlur={confirmpasswordOnBlurHandler}
        passwordIcon={passwordIcon}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      {form.confirmpasswordIsFocus && !form.confirmpasswordIsValid && (
        <pre className={classes.invalid__input}>
          MinLength(8), uppercase, lowercase, character, number
        </pre>
      )}

      <div className={classes.btn__box}>
        <Button
          id="btn__submit"
          type="submit"
          disabled={!form.formIsValid}
          className={classes.button}
        >
          Reset
        </Button>
      </div>
    </form>
  );
};
export default Form;
