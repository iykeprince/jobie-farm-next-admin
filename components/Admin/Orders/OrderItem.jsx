// import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
// import { db } from "../../../firebase";
// import Image from "next/image";
// import Button from "../../UI/Button";

// import { useRouter } from "next/router";
// import { ProductsActions } from "../../../store/Products/ProductsSlice";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import classes from "./Orders.module.css";

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
  //   const router = useRouter();
  //   const dispatch = useDispatch();

  //   const editHandler = () => {};

  //   const deleteHandler = async () => {
  // // Deleting a product
  // const docRef = doc(db, "products", id);
  // deleteDoc(docRef)
  //   .then(() => {
  //     console.log("Document successfully deleted!");
  //   })
  //   .catch((error) => {
  //     console.error("Error removing document: ", error);
  //   });
  // // Re-fetching updated products
  // const colRef = collection(db, "products");
  // const snapshots = await getDocs(colRef);
  // const docs = snapshots.docs.map((doc) => {
  //   const data = doc.data();
  //   data.id = doc.id;
  //   return data;
  // });
  // dispatch(ProductsActions.addProducts({ products: docs }));
  //   };
  const [updatedPaymentStatus, setPaymentStatus] = useState(paymentStatus);
  const [updatedOrderStatus, setOrderStatus] = useState(orderStatus);
  const PaymentStatusHandler = (e) => {
    setPaymentStatus(e.target.value);
  };
  const orderStatusHandler = (e) => {
    setOrderStatus(e.target.value);
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
        <td className={classes.td}>{totalPrice}</td>
        <td className={classes.td}>
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
        </td>
        <td className={classes.td}>
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
        </td>
      </tr>
    </>
  );
};
export default OrderItem;
