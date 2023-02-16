import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useAuth } from '../../contexts/auth.context'

export default function Profile() {
  const { authUser, loading } = useAuth()
  return (
    <>
      <Header />
      <div className="flex md:flex-row sm:flex-col justify-center align-middle">
        <div className="p-4">
          <div>Display name: {authUser?.displayName ?? ''}</div>
          <div>Email: {authUser?.email ?? ''}</div>
        </div>
        <div className="">
          <div className="border-solid border-slate-50">
            <div>
              <input placeholder="First name" />
            </div>
            <div>
              <input placeholder="Last name" />
            </div>
          </div>
          <div className="border-solid border-slate-50">
            <div>
              <input placeholder="Email address" readOnly />
            </div>
          </div>
          <div>
            <input placeholder='address'/>
          </div>
          <div className="border-solid border-slate-50">
            <div>
              <input placeholder="Password" />
            </div>

            <div>
              <input placeholder="Confirm Password" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
