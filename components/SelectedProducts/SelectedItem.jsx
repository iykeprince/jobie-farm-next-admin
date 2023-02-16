import Image from "next/image";
import { useDispatch } from "react-redux";
import { ProductsActions } from "../../store/Products/ProductsSlice";
import classes from "./SelectedProducts.module.css";

const SelectedItem = ({ title, price, totalPrice, id, image, quantity }) => {
  const dispatch = useDispatch();
  const deleteCartItems = () => {
    dispatch(ProductsActions.deleteCartItem({ id }));
  };
  const reduceCartItem = () => {
    dispatch(ProductsActions.removeCartItem({ id }));
  };
  const increaseCartItem = () => {
    dispatch(
      ProductsActions.addCartItem({
        id,
        title,
        image,
        price,
        amount: 1,
        totalPrice,
        quantity,
      })
    );
  };
  return (
    <tr className={classes.tr}>
      <td>
        <i
          className={`icofont-ui-delete ${classes.delete}`}
          onClick={deleteCartItems}
        ></i>
      </td>
      <td>
        <Image src={image} width={120} height={20} alt={title} />
      </td>
      <td>{title}</td>
      <td className={classes.quantity}>
        <span>
          <i
            className={`icofont-minus ${classes.add}`}
            onClick={reduceCartItem}
          ></i>
        </span>
        {quantity}{" "}
        <span>
          <i
            className={`icofont-plus ${classes.add}`}
            onClick={increaseCartItem}
          ></i>
        </span>
      </td>
      <td>{price}</td>
      <td>{totalPrice}</td>
    </tr>
  );
};
export default SelectedItem;
