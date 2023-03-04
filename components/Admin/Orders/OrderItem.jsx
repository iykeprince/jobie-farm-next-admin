import { collection, updateDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

import { ProductsActions } from "../../../store/Products/ProductsSlice";
import { useDispatch } from "react-redux";
import { AiOutlineSave } from "react-icons/ai";
import classes from "./Orders.module.css";
import { useState } from "react";

const OrderItem = ({
  id,
  title,
  customerName,
  customerEmail,
  customerPhone,
  category,
  totalPrice,
  paymentStatus,
  orderStatus,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();
  const [showPaymentIcon, setShowPaymentIcon] = useState({
    isChanged: false,
    selectedStatus: paymentStatus,
  });
  const [showOrderIcon, setShowOrderIcon] = useState({
    isChanged: false,
    selectedStatus: orderStatus,
  });

  const editStatusHandler = async (status, type) => {
    const areYouSure = confirm("Do you want to save");
    if (!areYouSure) return;
    console.log(status, type);
    const ref = doc(db, "orders", id);
    try {
      await updateDoc(ref, {
        title,
        customerName,
        customerEmail,
        customerPhone,
        category,
        totalPrice,
        paymentStatus: type === "payment" ? status : paymentStatus,
        orderStatus: type === "order" ? status : orderStatus,
        price,
        quantity,
      });
      const colRef = collection(db, "orders");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      dispatch(ProductsActions.addOrders({ orders: docs }));
      console.log("Document successfully updated!", docs);
      setShowOrderIcon((prev) => ({ ...prev, isChanged: false }));
      setShowPaymentIcon((prev) => ({ ...prev, isChanged: false }));
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <>
      <tr className={classes.tr}>
        <td className={classes.td}>
          <span>{customerName}</span> <br /> <span>{customerEmail}</span> <br />
          <span>{customerPhone}</span>
        </td>
        <td className={classes.td}>{category}</td>
        <td className={classes.td}>{title}</td>
        <td className={classes.td}>{quantity} </td>
        <td className={classes.td}>&#8358;{price}</td>
        <td className={classes.td}>&#8358;{totalPrice}</td>
        <td className={classes.td}>
          <span className={classes.span}>
            {" "}
            <select
              value={showPaymentIcon.selectedStatus}
              onChange={(e) => {
                setShowPaymentIcon((prev) => ({
                  isChanged: true,
                  selectedStatus: e.target.value,
                }));
              }}
              name="payment"
              id="payment"
              className={classes.select}
            >
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
            {showPaymentIcon.isChanged && (
              <AiOutlineSave
                className={classes.icon}
                onClick={() =>
                  editStatusHandler(showPaymentIcon.selectedStatus, "payment")
                }
              />
            )}
          </span>
        </td>
        <td className={classes.td}>
          <span className={classes.span}>
            <select
              value={showOrderIcon.selectedStatus}
              onChange={(e) => {
                setShowOrderIcon((prev) => ({
                  isChanged: true,
                  selectedStatus: e.target.value,
                }));
              }}
              name="order"
              id="order"
              className={classes.select}
            >
              <option value="Delivered">Delivered</option>
              <option value="Not Delivered"> Not Delivered</option>
              <option value="Shipped"> Shipped</option>
            </select>
            {showOrderIcon.isChanged && (
              <AiOutlineSave
                className={classes.icon}
                onClick={() =>
                  editStatusHandler(showOrderIcon.selectedStatus, "payment")
                }
              />
            )}
          </span>
        </td>
      </tr>
    </>
  );
};
export default OrderItem;
