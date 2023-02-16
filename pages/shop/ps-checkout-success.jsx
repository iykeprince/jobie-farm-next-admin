import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Checkouts from "../../components/Checkouts";
import classes from "../../components/Checkouts/Checkouts.module.css";
const PsCheckoutSuccess = () => {
  return (
    <>
      <Header />
      <section className={classes.contact__form}>
       <h2>Payment Successful</h2>
      </section>
      <Footer />
    </>
  );
};
export default PsCheckoutSuccess;
