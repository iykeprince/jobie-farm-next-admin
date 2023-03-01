import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Orders from "../../components/Admin/Orders/Orders";
import { db } from "../../firebase";
import { ProductsActions } from "../../store/Products/ProductsSlice";

const AllOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      // Get all orders from firestore
      const ordersref = collection(db, "orders");
      const ordersSnapshots = await getDocs(ordersref);
      const orDocs = ordersSnapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      dispatch(ProductsActions.addOrders({ orders: orDocs }));
    })();
  }, [dispatch]);
  return (
    <div>
      <Orders />
    </div>
  );
};
export default AllOrders;
