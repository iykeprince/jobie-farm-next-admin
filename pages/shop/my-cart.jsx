import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SelectedProducts from "../../components/SelectedProducts/SelectedProducts";
import Button from "../../components/Button";
import classes from "../../styles/Shop.module.css";
const MyCarts = () => {
  const { totalQuantity, totalAmount } = useSelector((state) => state.products);

  return (
    <section>
      <Header />
      <div className={classes.shop}>
        <h2 className={classes.heading}>Your Cart ({totalQuantity} items )</h2>
        <h4 className={classes.subheading}>Here are all your added items</h4>
        <SelectedProducts />
        <div className={classes.total}>
          Total Price: <span>${totalAmount}</span>
        </div>
        <div className={classes.btn__box}>
          {" "}
          <Button to="/shop/checkouts" link className={classes.button}>
            Check Out
          </Button>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default MyCarts;
