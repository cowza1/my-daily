import React from 'react'
import SignInForm from '../../../components/SignInForm'
import '../../../src/styles/globals.css'


function signin() {
  return (
    <div>
        <h1 className='text-center text-3xl'>Welcome back!</h1>
      <SignInForm/>
    </div>
  )
}

export default signin
