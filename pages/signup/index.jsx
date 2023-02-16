import { useState } from 'react'
import Link from "next/link";
import Form from "./Form";
import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import classes from "./SignUp.module.css";
import { useRouter } from 'next/router';
const SignUp = () => {
  const [error, setError] = useState(undefined)
  const [loading, setLoading ] = useState(false)
  const { createNewUserWithEmailAndPassword, updateUsername, signInWithCustomEmailAndPassword } = useFirebaseAuth();
  const router = useRouter()

  const signUpHandler = async (formData) => {
    console.log("BeforeSend", formData);


    console.log('call signup api')
    const { first_name, last_name, email, password } = formData;
    const name = `${first_name} ${last_name}`
    try {
      setLoading(true)
      const user = await createNewUserWithEmailAndPassword(email, password)
      console.log('user created', user)
      if (user != null) {
        await updateUsername(user, name)
      }
      await signInWithCustomEmailAndPassword(email, password)
      
      router.push('/')
    } catch (error) {
      console.log(`Something went wrong: ${error}`)
    }finally{
      setLoading(false)
    }
  };

  return (
    <>
      <div className={classes.login}>
        <h1 className={classes.h1}>Hello!</h1>
        {error && <div className={classes.error}>
          <p>{error}</p>
          </div>}
        <Form setError={setError} loading={loading} onSubmit={signUpHandler} />
        <p className={classes.p}>
          Already have an account?
          <Link href="/login" className={classes.a}>
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
