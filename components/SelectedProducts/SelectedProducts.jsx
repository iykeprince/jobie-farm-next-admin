import { useSelector } from "react-redux";
import SelectedItem from "./SelectedItem";
import classes from "./SelectedProducts.module.css";
const SelectedProducts = () => {
  const { carts } = useSelector((state) => state.products);
  return (
    <table className={classes.table}>
      <thead>
        <tr className={classes.tr}>
          <th>Remove</th>
          <th>Image</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {carts?.map((item) => (
          <SelectedItem
            key={item.id}
            id={item.id}
            title={item.title}
            totalPrice={item.totalPrice}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
      </tbody>
    </table>
  );
};
export default SelectedProducts;
