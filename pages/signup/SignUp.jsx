import { useState } from "react";

import { ValidatePassword, ValidateEmail } from "../../lib/Validations";

import Input from "../login/LoginInput";
import Button from "../../components/UI/Button";

import classes from "./SignUp cForm.module.css";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const Form = ({ setError, loading, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordIcon] = useState(true);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    confirmpassword: "",
    firstnameIsValid: false,
    phoneIsValid: false,
    lastnameIsValid: false,
    emailIsValid: false,
    passwordIsValid: false,
    confirmpasswordIsValid: false,
    firstnameIsFocus: false,
    lastnameIsFocus: false,
    phoneIsFocus: false,
    emailIsFocus: false,
    confirmpasswordIsFocus: false,
    formIsValid: false,
  });

  const firstnameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstname: e.target.value };
    });
    const { firstnameIsValid } = form;
    const isValid = e.target.value.length > 3 || e.target.value.length < 10;

    if (firstnameIsValid && isValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };
  const lastnameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastname: e.target.value };
    });
    const { lastnameIsValid } = form;
    const isValid = e.target.value.length > 3 || e.target.value.length < 10;

    if (lastnameIsValid && isValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };
  const phoneOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, phone: e.target.value };
    });
    const { phoneIsValid } = form;
    const isValid = e.target.value.startsWith("+");

    if (phoneIsValid && isValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };

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
  const firstnameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstnameIsFocus: true };
    });

    if (form.firstname.length >= 3 && form.firstname.length <= 8) {
      setForm((prev) => {
        return { ...prev, firstnameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, firstnameIsValid: false };
      });
    }
  };
  const lastnameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastnameIsFocus: true };
    });

    if (form.lastname.length >= 3 && form.lastname.length <= 8) {
      setForm((prev) => {
        return { ...prev, lastnameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, lastnameIsValid: false };
      });
    }
  };
  const phoneOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, phoneIsFocus: true };
    });

    if (form.phone.startsWith("+")) {
      setForm((prev) => {
        return { ...prev, phoneIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, phoneIsValid: false };
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
    onSubmit({
      first_name: form.firstname,
      last_name: form.lastname,
      email: form.email,
      password: form.password,
      repeat_password: form.confirmpassword,
    });

    // Clearing the input fields
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      firstnameIsValid: false,
      emailIsValid: false,
      passwordIsValid: false,
      confirmpasswordIsValid: false,
      nameIsFocus: false,
      emailIsFocus: false,
      passwordIsFocus: false,
      confirmpasswordIsFocus: false,
      formIsValid: false,
    });
  };

  return (
    <form
      className={classes.login__form}
      onSubmit={submitHandler}
      data-testid="login__form"
    >
      <Input
        id="firstname"
        label="First Name"
        type="text"
        invalid={!form.firstnameIsValid && form.nameIsFocus ? "invalid" : ""}
        placeholder="Enter your firstname"
        value={form.firstname}
        onChange={firstnameOnChangeHandler}
        onBlur={firstnameOnBlurHandler}
      />
      {form.firstnameIsFocus && !form.firstnameIsValid && (
        <pre className={classes.invalid__input}>
          Enter a firstname of length above 3 & not more than 8
        </pre>
      )}
      <Input
        id="lastname"
        label="Last Name"
        type="text"
        invalid={!form.lastnameIsValid && form.lastname ? "invalid" : ""}
        placeholder="Enter your lastname"
        value={form.lastname}
        onChange={lastnameOnChangeHandler}
        onBlur={lastnameOnBlurHandler}
      />
      {form.lastnameIsFocus && !form.lastnameIsValid && (
        <pre className={classes.invalid__input}>
          Enter a lastname of length above 3 & not more than 8
        </pre>
      )}

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
      <Input
        id="phone"
        label="Phone Number"
        type="number"
        invalid={!form.phoneIsValid && form.phoneIsFocus ? "invalid" : ""}
        placeholder="e.g, +2349021002100"
        value={form.phone}
        onChange={phoneOnChangeHandler}
        onBlur={phoneOnBlurHandler}
      />
      {form.phoneIsFocus && !form.phoneIsValid && (
        <pre className={classes.invalid__input}>Enter a Valid number</pre>
      )}
      <Input
        id="password"
        label="Password"
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
        label="Confirm Password"
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
          disabled={!form.formIsValid || loading}
          className={classes.button}
        >
          {loading ? <LoadingSpinner /> : "Sign up"}
        </Button>
      </div>
    </form>
  );
};
export default Form;
