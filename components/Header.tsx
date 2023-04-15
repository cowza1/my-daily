'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.png'
import { useSession, signOut } from "next-auth/react"


function Header() {

  const { data: session } = useSession()
  if (session) {
    return (
      <nav className='flex items-center justify-between space-x-2 font-bold px-4 py-2'>
          <Link
          href="/"
          >
          <div className="flex items-center space-x-2">
            <Image
            src={Logo}
            height={100}
            width={100}
            alt="logo"
            />
          </div>
          </Link>
          <div className='flex flex-row'>
             <Link
             className='m-2'
             href="/dashboard"
             >
             <p className='border-2  border-cyan-500 text-cyan-500 py-2 px-4 font-bold hover:border-black hover:text-black transition-colors'>Dashboard</p>
             </Link>
             <button
              className='m-2 py-2 px-4 hover:underline'
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
  <p>Sign Out</p>
</button>

          </div>
      </nav>
    )
  }

    return (
      <nav className='flex items-center justify-between space-x-2 font-bold px-4 py-2'>
          <Link
          href="/"
          >
          <div className="flex items-center space-x-2">
            <Image
            src={Logo}
            height={100}
            width={100}
            alt="logo"
            />
          </div>
          </Link>
          <div className='flex flex-row'>
             <Link
             className='m-2'
             href="/subscription"
             >
             <p className='border-2  border-cyan-500 text-cyan-500 py-2 px-4 font-bold hover:border-black hover:text-black transition-colors'>Subscribe</p>
             </Link>
             <Link
             className='m-2 py-2 px-4 hover:underline'
             href="/signin"
             >
             <p>Sign in</p>
             </Link>
          </div>
      </nav>
    );
  }
  
  export default Header
  

