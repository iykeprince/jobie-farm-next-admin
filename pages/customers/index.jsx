import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllUsers from "../../components/Admin/Customers/AllUsers";
import { db } from "../../firebase";
import { ProductsActions } from "../../store/Products/ProductsSlice";
const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
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
    <section>
      <AllUsers />
    </section>
  );
};
export default Users;
