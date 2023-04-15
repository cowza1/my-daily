
'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import SignInForm from "../components/SignInForm"
import {client} from "../lib/sanity.client"
import '../src/styles/globals.css'
import { groq } from "next-sanity";
import { useEffect, useState } from "react"
import Link from 'next/link'

export default function FetchUserData({userQuery}:any) {

  const { data: session } = useSession()
  const userEmail = session?.user?.email
  const userName = session?.user?.name
  if (session) {

    return (
      <div className="">
        {userQuery.map((user:any) => {
          if (user.email === userEmail) {
            return (
              <div className="">
                <p className='text-center text-xl mb-4 font-bold text-cyan-500'>Hi {userName}!</p>
                  <div className="border-2 p-2 rounded-xl border-cyan-500">
                    <p className="text-center">Your current plan with us is:<br/> <span className="font-bold">{user.PlanName}, ${user.PlanPrice}</span></p>
                    <div>
                    {/* <p className="font-bold">{user.PlanName} - ${user.PlanPrice}</p> */}
                  {user?.PlanInfo?.map((info:any) => (
                      <li className="mx-4">{info}</li>
                    ))}                  
                  </div>
                </div>
              </div>
            );
          } 
        })}
      </div>
    )
      }

  return(
    <>
    <div className="text-center">
      <p>You are not currently signed in</p>
    </div>
    <SignInForm/>
    </>
  )
    
}
