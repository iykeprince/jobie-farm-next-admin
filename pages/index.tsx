import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { ProductsActions } from "../store/Products/ProductsSlice";

import Menu from "../components/Admin/Home/Menu";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      // Get all products from firestore
      const productsRef = collection(db, "products");
      const productsSnapshots = await getDocs(productsRef);
      const proDocs = productsSnapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      dispatch(ProductsActions.addProducts({ products: proDocs }));

      // Get all transactions from firestore
      const transactionsRef = collection(db, "transactions");
      const transactionsSnapshots = await getDocs(transactionsRef);
      const traDocs = transactionsSnapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      dispatch(ProductsActions.addTransactions({ transactions: traDocs }));

      // Get all orders from firestore
      const ordersref = collection(db, "orders");
      const ordersSnapshots = await getDocs(ordersref);
      const orDocs = ordersSnapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      dispatch(ProductsActions.addOrders({ orders: orDocs }));

      // Get all Users from firestore
      const usersRef = collection(db, "users");
      const usersSnapshot = await getDocs(usersRef);
      const userDocs = usersSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      dispatch(ProductsActions.addUsers({ users: userDocs }));
    })();
  }, [dispatch]);
  return (
    <section className="admin__home">
      <Menu />
    </section>
  );
}
