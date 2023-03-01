import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllTransactions from "../../components/Admin/Transactions/AllTransactions";
import { db } from "../../firebase";
import { ProductsActions } from "../../store/Products/ProductsSlice";

const Transactions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      // Get all transactions from firestore
      const transactionsRef = collection(db, "transactions");
      const transactionsSnapshots = await getDocs(transactionsRef);
      const traDocs = transactionsSnapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      dispatch(ProductsActions.addTransactions({ transactions: traDocs }));
    })();
  }, [dispatch]);
  return (
    <div>
      <AllTransactions />
    </div>
  );
};
export default Transactions;
