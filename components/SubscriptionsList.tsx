
'use client'
import Link from 'next/link'
import React, {useState} from 'react'

type Props = {
    subs: any[];
  }

function SubscriptionsList({subs}:Props) {



    const handleClick = (e:any) => {
        e.preventDefault();
        console.log(e)
        const section = document.querySelector(e.target.hash);
        section?.scrollIntoView({ behavior: 'smooth' });
      };


  return (
    <div>
        <div className='flex flex-col  mx-4 px-2 md:p-12 md:flex-row place-items-center md:justify-evenly ' >
            {subs.map((sub)=>
            <div key={sub.name} className='text-center text-3xl p-4 m-4  m-auto border-2 border-cyan-400 rounded-xl h-80 w-80 flex flex-col my-2'>
            <div className='my-2'>
                <p className='text-xl'>{sub.name}</p>
                <p>${sub.price}/month</p>
            </div>
            <ul className='text-sm leading-6 text-left mx-2'>
                {sub.info.map((subInfo:any) => 
                    <li className='list-disc mx-2'>{subInfo}</li>
                    )}
            
            </ul>
            <div className='mt-auto text-sm underline my-2 flex flex-col'>
                <a
                onClick={handleClick}
                href="#tab"
                >
                Find Out More
                </a>
                <Link
                style={{textDecoration: 'none'}}
                className='text-sm py-2 px-2 rounded-xl bg-cyan-400 w-1/2 m-auto my-2'
                href={{ pathname: '/register', query: {plan_id: sub._id, plan_name: sub.name, plan_price: sub.price, plan_info: JSON.stringify(sub.info)} }}>Register
                </Link>
            </div>
            </div>
                 )}
        </div>
    </div>
  )
}

export default SubscriptionsList
