import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'

const formatAuthUser = (user: any) => ({
  uid: user.uid,
  email: user.email,
})

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const clear = () => {
    setAuthUser(null)
    setLoading(false)
  }

  const signInWithCustomEmailAndPassword = (
    email: string,
    password: string,
  ): Promise<UserCredential | null> =>
    signInWithEmailAndPassword(auth, email, password)

  const createNewUserWithEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
   const credential = await createUserWithEmailAndPassword(auth, email, password)
   await sendEmailVerification(credential.user)
   return credential.user;
  }

  const updateUsername = (user: User, name: string): Promise<void> =>
    updateProfile(user, {
      displayName: name,
    })

  const signOut = () => auth.signOut()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setAuthUser(null)
        setLoading(false)
        return
      }

      setLoading(true)
      var formattedUser = formatAuthUser(user)
      setAuthUser(formattedUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return {
    authUser,
    loading,
    signInWithCustomEmailAndPassword,
    createNewUserWithEmailAndPassword,
    updateUsername,
    signOut,
  }
}
