import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";

import classes from "../../styles/Shop.module.css";
import { useState } from "react";
const Shop = () => {
  const { products } = useSelector((state) => state.products);
  const [start, setStart] = useState(0);
  const PRODUCTS_PER_PAGE = 5;
  const end = start + PRODUCTS_PER_PAGE;
  const getPageHandler = (page) => {
    setStart((pag) => page * PRODUCTS_PER_PAGE - PRODUCTS_PER_PAGE);
  };
  return (
    <section>
      <Header />
      <div className={classes.shop}>
        <h2 className={classes.heading}>All products</h2>
        <h4 className={classes.subheading}>
          Here are all the available products
        </h4>
        <Products start={start} end={end} />
        <Pagination
          totalProducts={products.length}
          productsPerPage={PRODUCTS_PER_PAGE}
          onChange={getPageHandler}
        />
      </div>
      <Footer />
    </section>
  );
};
export default Shop;
