import { useState } from "react";
import classes from "./Orders.module.css";
const MobileOrderItem = (props) => {
  const {
    id,
    title,
    category,
    totalPrice,
    paymentStatus,
    orderStatus,
    price,
    quantity,
    customerName,
    customerEmail,
    customerPhone,
  } = props;
  const [updatedPaymentStatus, setPaymentStatus] = useState(paymentStatus);
  const [updatedOrderStatus, setOrderStatus] = useState(orderStatus);
  const PaymentStatusHandler = (e) => {
    setPaymentStatus(e.target.value);
  };
  const orderStatusHandler = (e) => {
    setOrderStatus(e.target.value);
  };
  return (
    <li className={`${classes.li}`}>
      <p>
        Name: <span> {customerName}</span>
      </p>
      <p>
        Email: <span> {customerEmail}</span>
      </p>
      <p>
        Phone: <span> {customerPhone}</span>
      </p>
      <p>
        Title: <span> {title}</span>
      </p>
      <p>
        Category:<span> {category}</span>
      </p>
      <p>
        Quantity:<span> {quantity}</span>
      </p>
      <p>
        Unit Price:<span> &#8358;{price}</span>
      </p>
      <p>
        Total Price:<span> &#8358;{totalPrice}</span>
      </p>
      <p>
        Payment Status:
        <br />
        <span>
          <select
            value={updatedPaymentStatus}
            onChange={PaymentStatusHandler}
            name="payment"
            id="payment"
            className={classes.select}
          >
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </span>
      </p>
      <p>
        Order Status:
        <br />
        <span>
          {" "}
          <select
            value={updatedOrderStatus}
            onChange={orderStatusHandler}
            name="order"
            id="order"
            className={classes.select}
          >
            <option value="Delivered">Delivered</option>
            <option value="Not Delivered"> Not Delivered</option>
            <option value="Shipped"> Shipped</option>
          </select>
        </span>
      </p>
    </li>
  );
};
export default MobileOrderItem;
