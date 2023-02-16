import Button from "../Button";
import Modal from "../Modal/Modal";
import { MdCancel } from "react-icons/md";
import classes from "./Bank.module.css";
const Bank = ({ onClose }) => {
  const closeModal = () => {
    onClose();
  };
  return (
    <Modal onClick={closeModal}>
      <div className={classes.bank}>
        <h3 className={classes.h3}>PAYMENT DETAILS FOR BANK TRANSFERS</h3>
        <div className={classes.div}>Bank Name: Access Bank</div>
        <div className={classes.div}>
          {" "}
          Account Name: Jobie Agro Farm limited
        </div>
        <div className={classes.div}>Account No: 0088833445</div>
        <div className={classes.btn__box}>
          <Button onClick={closeModal} className={classes.button}>
            I have Paid
          </Button>
        </div>
      </div>
      <MdCancel className={classes.cancel} onClick={closeModal} />
    </Modal>
  );
};
export default Bank;
