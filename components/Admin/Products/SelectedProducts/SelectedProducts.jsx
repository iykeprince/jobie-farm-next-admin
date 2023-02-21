import { useSelector } from "react-redux";
import ProductsItem from "../ProductItem";
import SelectedItem from "./SelectedItem";
import classes from "./SelectedProducts.module.css";
const SelectedProducts = ({ start, end }) => {
  const { products } = useSelector((state) => state.products);
  return (
    <>
      <div className={`${classes.desktop}`}>
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
            {products?.map((product) => (
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
      </div>

      {/* Mobile view */}
      <ul className={`${classes.mobile}`}>
        <div className="col-12">
          <div className="section-wrapper">
            <div className="row justify-content-center mb-15-none">
              {products.slice(start, end).map((product) => (
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
      </ul>
    </>
  );
};
export default SelectedProducts;
