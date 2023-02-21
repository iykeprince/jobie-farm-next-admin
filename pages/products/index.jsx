import { useSelector } from "react-redux";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { ProductsActions } from "../../store/Products/ProductsSlice";

import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Admin/Search/Search";
import Button from "../../components/UI/Button";

import classes from "../../styles/Shop.module.css";
import SelectedProducts from "../../components/Admin/Products/SelectedProducts/SelectedProducts";
const Shop = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Pagination logic
  const { products } = useSelector((state) => state.products);
  const [start, setStart] = useState(0);
  const PRODUCTS_PER_PAGE = 10;
  const end = start + PRODUCTS_PER_PAGE;
  const getPageHandler = (page) => {
    setStart((pag) => page * PRODUCTS_PER_PAGE - PRODUCTS_PER_PAGE);
  };
  const addProductsHandler = (event) => {
    event.preventDefault();
    router.push("/products/addproduct");
  };

  // Fetching products from firebase
  useEffect(() => {
    (async () => {
      const colRef = collection(db, "products");
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      dispatch(ProductsActions.addProducts({ products: docs }));
    })();
  }, [dispatch]);
  return (
    <section className={classes.shop}>
      <div className={classes.top}>
        <h2 className={classes.heading}>All products</h2>
        <div className={classes.search__box}>
          <Search />
        </div>
        <div className={classes.btn__box}>
          <Button className={classes.button} onClick={addProductsHandler}>
            Add New
          </Button>
        </div>
      </div>
      <SelectedProducts start={start} end={end} />
      <Pagination
        totalProducts={products.length}
        productsPerPage={PRODUCTS_PER_PAGE}
        onChange={getPageHandler}
      />
    </section>
  );
};
export default Shop;
