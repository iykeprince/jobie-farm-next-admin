import React from "react";
import ReactDOM from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop}></div>;
};

const Overlay = ({ children, onClick }) => {
  return (
    <div className={classes.overlay}>
      <AiOutlineCloseCircle className={classes.close__icon} onClick={onClick} />
      <div>{children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <Overlay onClick={props.onClick}>{props.children}</Overlay>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default Modal;
