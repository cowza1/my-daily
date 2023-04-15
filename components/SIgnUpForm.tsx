'use client';
import { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import { signUp } from 'next-auth-sanity/client';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image'


export default function SignUpForm() {
    const searchParams = useSearchParams()
    const planName =  searchParams?.get('plan_name')
    const planPrice = searchParams?.get('plan_price')
    const planInfo = searchParams?.get('plan_info')
    const info = planInfo ? JSON.parse(planInfo) : null
    const planId = searchParams?.get('plan_id')

    const [userPlanName, setUserPlanName] = useState<string>(planName || '')
    const [userPlanPrice, setUserPlanPrice] = useState<string>(planPrice || '')
    const [userPlanInfo, setUserPlanInfo] = useState<string>(planInfo || '')


useEffect(() => {
  setUserPlanName(planName || '')
  setUserPlanPrice(planPrice || '')
  setUserPlanInfo(planInfo || '')
})


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await signUp({
      email,
      password,
      name,
      PlanName: planName,
      PlanPrice: planPrice,
      PlanInfo: info
    });

    // await signIn('sanity-login', {
    //   redirect: false,
    //   email,
    //   password
    // });

    router.refresh();
  };

  // const handleSubmitSignIn = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   await signIn('sanity-login', {
  //     redirect: false,
  //     email,
  //     password
  //   });

  //   router.refresh();
  // };

  return (
    <div>
        <div className='flex flex-col text-center self-center m-auto p-2 my-2 rounded-xl mx-8'>
          {/* <Image
          src={planImage}
          /> */}
          <p className='text-xl'>You chose the</p>
          <p className='text-3xl text-cyan-500 my-2'>{planName}</p>
          <p className='text-xl'>plan</p>
          <p className=' my-2'>at <span className='text-cyan-500 text-xl'>${planPrice}</span>/month</p>
          {info.map((i:any) => 
          <li className='leading-8'>{i}</li>
          )}
          <div className='flex flex-col justify-center py-4 text-xl text-red-700 font-bold'>
            <h1>Its your lucky day!</h1>
            <p>For a limited time we are provding a free trial period!</p>
            <p>You just need to register!</p>
          </div>
       </div>
      <form onSubmit={handleSubmit} className='flex flex-col text-center max-w-2xl self-center m-auto p-5 my-10"'>
        <input
         value={planName ? planName : ''}
        hidden
        />
              <input
        value={planPrice ? planPrice : ''}
        hidden
        />
              <input
        value={planInfo ? planInfo : ''}
        hidden
        />
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
        <input
        className='w-full outline-none focus:ring ring-cyan-300 shadow border rounded py-2 px-3 form-input mt-1 block my-4'
          type="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button
        className='mt-4 py-3 rounded m-auto px-6 bg-cyan-300'
        type="submit">Register</button>
      </form>
      <div className='flex flex-row justify-center pb-8'>
          <button 
          className='mt-4 py-3 rounded m-auto px-6 bg-cyan-300'
          onClick={() => signIn('google')}>Sign in with Gooogle</button>
      </div>
    </div>
  );
}