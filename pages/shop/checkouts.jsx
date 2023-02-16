import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Checkouts from "../../components/Checkouts";
import classes from "../../components/Checkouts/Checkouts.module.css";
const Checkout = () => {
  return (
    <>
      <Header />
      <section className={classes.contact__form}>
        <Checkouts />
      </section>
      <Footer />
    </>
  );
};
export default Checkout;
