import Image from "next/image";
import classes from "./Cart.module.css";
const CartItem = ({ index, price, image, quantity, totalPrice }) => {
  return (
    <tr className={classes.tr}>
      <td className={classes.td}>{`${index}`.padStart(2, 0)}</td>{" "}
      <td className={classes.image}>
        <Image src={image} alt="cart" width={40} height={40} />
      </td>
      <td className={classes.td}>{quantity}</td>
      <td className={classes.td}>&#8358;{price}</td>
      <td className={classes.td}>&#8358;{totalPrice}</td>
    </tr>
  );
};
export default CartItem;
