import { MdCancel } from "react-icons/md";
import Modal from "../Modal/Modal";
import classes from "./Flutter.module.css";
const Flutter = ({ onClose }) => {
  const closeModal = () => {
    onClose();
  };
  return (
    <Modal onClick={closeModal}>
      <div className={classes.flutter}>Coming soon....</div>
      <MdCancel className={classes.cancel} onClick={closeModal} />
    </Modal>
  );
};
export default Flutter;
