import Link from "next/link";
import Form from "./Form";
import classes from "./ResetForm.module.css";
const ResetPassword = () => {
  const getFormDetails = (formData) => {
    console.log(formData);
  };
  return (
    <section className={classes.forgot__password}>
      <p className={classes.text}>Reset Password</p>
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
export default ResetPassword;
