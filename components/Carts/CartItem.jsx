import Image from "next/image";
import { useDispatch } from "react-redux";
import { ProductsActions } from "../../store/Products/ProductsSlice";
import classes from "../../styles/Cart.module.css";
const CartItem = ({ item }) => {
  const { id, title, price, image, quantity, totalPrice } = item;
  const dispatch = useDispatch();
  const removeCartItem = () => {
    dispatch(
      ProductsActions.removeCartItem({
        id,
      })
    );
  };
  return (
    <div className={`cart-item`}>
      <div className="cart-img">
        <a href="#">
          <Image src={image} alt="cart" width={80} height={80} />
        </a>
      </div>
      <div className="cart-des">
        <a href="#">{title}</a>
        <p>
          ${price} <span className={classes.quantity}>{quantity}x</span>
          <span className={classes.quantity}>${totalPrice}</span>
        </p>
      </div>
      <div className={`cart-btn ${classes.icon}`} onClick={removeCartItem}>
        <a href="#">
          <i className="icofont-ui-delete"></i>
        </a>
      </div>
    </div>
  );
};
export default CartItem;
