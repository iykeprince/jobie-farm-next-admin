import classes from "./Transactions.module.css";
const MobileTransactions = ({ details }) => {
  const { email, phone, amount, status, paymentType, date } = details;
  return (
    <li className={`${classes.li}`}>
      <p>
        Date: <span> {date}</span>
      </p>
      <p>
        {" "}
        Email:<span> {email}</span>
      </p>
      <p>
        {" "}
        Phone:<span> {phone}</span>
      </p>
      <p>
        Amount:<span> {amount}</span>
      </p>
      <p>
        Status:<span> {status}</span>
      </p>
      <p>
        Payment Type:<span> {paymentType}</span>
      </p>
    </li>
  );
};
export default MobileTransactions;
