import Link from 'next/link'

import Form from './Form'
import useFirebaseAuth from './../../hooks/useFirebaseAuth'
import classes from './Login.module.css'

import { useRouter } from 'next/router'
import { useState } from 'react'

const Login = () => {
  const { signInWithCustomEmailAndPassword } = useFirebaseAuth()
  const [pending, setPending] = useState(false)
  const router = useRouter()

  const signInHandler = async (formData) => {
    console.log(formData);
    setPending(true)
    try{
      await signInWithCustomEmailAndPassword({
        email: formData.email,
        password: formData.password,
      })
      router.push('/')
    }catch(error) {
 console.log('error occured', error.toString())
    }finally{
      setPending(false)
    }
  }

  return (
    <>
      <div className={classes.login} data-testid="login__page">
        <h1 className={classes.h1}>Welcome back!</h1>
        <Form onSubmit={signInHandler} loading={pending} />

        <p className={classes.p}>
          Do not have an account?
          <Link href="/signup" className={classes.a}>
            Create now
          </Link>
        </p>
      </div>
    </>
  )
}

export default Login
