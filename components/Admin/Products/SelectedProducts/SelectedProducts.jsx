import { useSelector } from "react-redux";
import ProductsItem from "../ProductItem";
import SelectedItem from "./SelectedItem";
import classes from "./SelectedProducts.module.css";
const SelectedProducts = ({ start, end }) => {
  const { products, filteredProducts, noProduct } = useSelector(
    (state) => state.products
  );
  const productsArr = filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <>
      <div className={`${classes.desktop}`}>
        {!noProduct ? (
          <table className={`${classes.table}`}>
            <thead>
              <tr className={classes.tr}>
                <th className={classes.th}>Actions</th>
                <th className={classes.th}>Image</th>
                <th className={classes.th}>Product Name</th>
                <th className={classes.th}>Quantity</th>
                <th className={classes.th}>Unit Price</th>
              </tr>
            </thead>
            <tbody>
              {productsArr?.map((product) => (
                <SelectedItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className={classes.no__product}>
            No product matched the search term!
          </p>
        )}
      </div>

      {/* Mobile view */}
      <ul className={`${classes.mobile}`}>
        {!noProduct ? (
          <div className="col-12">
            <div className="section-wrapper">
              <div className="row justify-content-center mb-15-none">
                {productsArr.slice(start, end).map((product) => (
                  <ProductsItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    quantity={product.quantity}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className={classes.no__product}>
            No product matched the search term!
          </p>
        )}
      </ul>
    </>
  );
};
export default SelectedProducts;
