import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useAuth } from '../../contexts/auth.context'

export default function Orders() {
  const { authUser, loading } = useAuth()
  return (
    <>
      <Header />
      <h2>Orders</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <pre>{JSON.stringify(authUser, null, 2)}</pre>
        </div>
      )}
      <h1 className="text-3xl font-bold underline">Orders!</h1>
      <Footer />
    </>
  )
}
