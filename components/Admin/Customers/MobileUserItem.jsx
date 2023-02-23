import classes from "./User.module.css";
const MobileUserItem = ({ details }) => {
  const { email, phone, name, firstName, lastName } = details;
  return (
    <li className={`${classes.li}`}>
      <p>
        {" "}
        Last Name:<span> {lastName}</span>
      </p>
      <p>
        {" "}
        First Name:<span> {firstName}</span>
      </p>

      <p>
        {" "}
        Email:<span> {email}</span>
      </p>
      <p>
        {" "}
        Phone:<span> {phone}</span>
      </p>
    </li>
  );
};
export default MobileUserItem;
