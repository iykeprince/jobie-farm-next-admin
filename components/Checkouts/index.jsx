import { usePaystackPayment } from "react-paystack";
import { useAuth } from "../../contexts/auth.context";
import { useRouter } from "next/router";
import { useState } from "react";
import Form from "./Form";
import Bank from "./Bank";
import Flutter from "./Flutter";

import classes from "./Checkouts.module.css";
const Checkouts = () => {
  const [bankModal, setBankModal] = useState(false);
  const [flutterModal, setFlutterModal] = useState(false);

  const { auth } = useAuth();
  const config = (email, amount) => ({
    reference: new Date().getTime().toString(),
    email,
    amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_TEXT_PUBLIC_KEY,
  });
  const initializePayment = usePaystackPayment(
    config(auth?.email ?? "", 20000)
  );
  console.log("auth", auth);
  const router = useRouter();

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    router.push("/ps-checkout-success");
  };
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const getFormDatas = (datas) => {
    console.log(datas);
    initializePayment(onSuccess, onClose);
  };
  const closeBank = () => {
    setBankModal(false);
  };
  const closeFlutter = () => {
    setFlutterModal(false);
  };
  return (
    <div className={classes.payment__form}>
      {bankModal && <Bank onClose={closeBank} />}
      {flutterModal && <Flutter onClose={closeFlutter} />}
      <Form
        onPaystack={getFormDatas}
        onBank={() => setBankModal(true)}
        onFlutter={() => setFlutterModal(true)}
      />
    </div>
  );
};
export default Checkouts;
