import classes from "./Transactions.module.css";

const TransactionItem = ({ details }) => {
  const { email, phone, amount, status, paymentType, date } = details;
  return (
    <>
      <tr className={classes.tr}>
        <td className={classes.td}>{date}</td>
        <td className={classes.td}>{email}</td>
        <td className={classes.td}>{phone}</td>
        <td className={classes.td}>{amount}</td>
        <td className={classes.td}>{status}</td>
        <td className={classes.td}>{`${paymentType}`.toUpperCase()}</td>
      </tr>
    </>
  );
};
export default TransactionItem;
