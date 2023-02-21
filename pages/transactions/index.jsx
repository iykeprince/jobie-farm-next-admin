import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllTransactions from "../../components/Admin/Transactions/AllTransactions";
import { db } from "../../firebase";
import { ProductsActions } from "../../store/Products/ProductsSlice";

const Transactions = () => {
  const dispatch = useDispatch();
  // Fetching all transactions from firebase
  useEffect(() => {
    (async () => {
      const colRef = collection(db, "transactions");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      dispatch(ProductsActions.addTransactions({ transactions: docs }));
    })();
  }, [dispatch]);
  return (
    <div>
      <AllTransactions />
    </div>
  );
};
export default Transactions;
