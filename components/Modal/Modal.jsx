import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const Overlay = (props) => {
  return <div className={classes.overlay}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <Overlay onClick={props.onClick}>{props.children} </Overlay>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default Modal;
