'use client';

import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';


function SignInForm() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

   const handleSubmitSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    await signIn('sanity-login', {
      redirect: false,
      email,
      password
    });
    
    router.push('/dashboard');
  };

  return (
    <div>
       <form onSubmit={handleSubmitSignIn} className='flex flex-col text-center max-w-2xl self-center m-auto p-5 my-10"'>
        <input
        className='w-full outline-none focus:ring ring-cyan-300 shadow border rounded py-2 px-3 form-input mt-1 block my-4'
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
        className='w-full outline-none focus:ring ring-cyan-300 shadow border rounded py-2 px-3 form-input mt-1 block my-4'
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
        className='mt-4 py-3 rounded m-auto px-6 bg-cyan-300'
        type="submit">Signin</button>
      </form>
      <div className='flex flex-row justify-center py-8'>
        <button 
        className='mt-4 py-3 rounded m-auto px-6 bg-cyan-300'
        onClick={() => signIn('google')}>Sign in with Gooogle</button>
    </div>
    </div>
  )
}

export default SignInForm
