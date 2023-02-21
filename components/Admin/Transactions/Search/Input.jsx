import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const { invalid, label, ...others } = props;

  return (
    <div className={`${props.className} ${classes.input__group}`}>
      <label className={classes.label}>{label}</label>
      <input
        {...others}
        className={`${invalid ? `${classes.invalid}` : ""} ${classes.input}`}
      ></input>
    </div>
  );
};

export default Input;
