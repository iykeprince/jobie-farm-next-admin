import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Carts = ({ carts, totalAmount }) => {
  return (
    <>
      <ul className={classes.ul}>
        <table className={`${classes.table}`}>
          <thead>
            <tr className={classes.tr}>
              <th className={classes.th}>S/N</th>
              <th className={classes.th}>Image</th>
              <th className={classes.th}>Quantity</th>
              <th className={classes.th}>Price</th>
              <th className={classes.th}>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {carts?.length === 0 && (
              <p className={classes.p}>Your Cart is empty</p>
            )}
            {carts?.length > 0 &&
              carts?.map((item, index) => (
                <CartItem
                  key={index}
                  index={index + 1}
                  price={item.price}
                  quantity={item.quantity}
                  image={item.image}
                  totalPrice={item.totalPrice}
                />
              ))}
          </tbody>
        </table>
        {carts?.length > 0 && (
          <p className={classes.total}>
            Total: <b className={classes.total__amount}>&#8358;{totalAmount}</b>
          </p>
        )}
      </ul>
    </>
  );
};
export default Carts;
