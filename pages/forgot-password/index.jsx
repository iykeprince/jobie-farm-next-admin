import Link from "next/link";
import Form from "./Form";
import classes from "./ForgotForm.module.css";
const ForgotPassword = () => {
  const getFormDetails = (formData) => {
    console.log(formData);
  };
  return (
    <section className={classes.forgot__password}>
      <p className={classes.text}>
        Kindly enter the email associated with your account and we will send you
        a link to reset your password.
      </p>
      <Form onSubmit={getFormDetails} />
      <p className={classes.p}>
        Do not have an account?
        <Link href="/signup" className={classes.a}>
          Create now
        </Link>
      </p>
    </section>
  );
};
export default ForgotPassword;
