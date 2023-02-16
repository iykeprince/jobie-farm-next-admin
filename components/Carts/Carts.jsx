import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "../../styles/Cart.module.css";
import Link from "next/link";

const Carts = () => {
  const { carts, totalAmount, totalQuantity, changed } = useSelector(
    (state) => state.products
  );

  return (
    <>
      <ul className="lab-ul search-cart">
        <li>
          <div className="cart-option">
            <i className={`${classes.cart__icon} icofont-cart-alt`}></i>
            <span className={classes.total__quantity}>{totalQuantity}</span>
            <div className={`${classes.cart} cart-content`}>
              {carts?.length > 0 &&
                carts?.map((item) => <CartItem item={item} key={item.id} />)}
              {carts?.length === 0 && (
                <p className={classes.p}>Your Cart is empty</p>
              )}
              {carts?.length > 0 && (
                <div className="cart-bottom">
                  <div className="cart-subtotal">
                    <p>
                      Total: <b className="float-right">${totalAmount}</b>
                    </p>
                  </div>
                  <div className={`cart-action ${classes.cart__button}`}>
                    <Link href="/shop/my-cart" className="lab-btn">
                      <span>View Cart</span>
                    </Link>
                    <Link href="/shop/checkouts" className={`lab-btn`}>
                      <span>Check Out</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </li>
      </ul>
      {changed && (
        <p
          className={`${classes.item__modal} ${
            changed ? `${classes.modal}` : ""
          }`}
        >
          An item has been added to your Cart
        </p>
      )}
    </>
  );
};
export default Carts;
