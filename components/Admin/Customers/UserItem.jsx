import classes from "./User.module.css";

const UserItem = ({ details }) => {
  const { email, phone, firstName, lastName } = details;
  return (
    <>
      <tr className={classes.tr}>
        <td className={classes.td}>{firstName}</td>
        <td className={classes.td}>{lastName}</td>
        <td className={classes.td}>{email}</td>
        <td className={classes.td}>{phone}</td>
      </tr>
    </>
  );
};
export default UserItem;
