
import React from 'react'
import Image from 'next/image'
import cooking from '../../../public/cooking.jpg'
import cooking2 from '../../../public/cooking2.jpg'
import Link from 'next/link'
import TabBar from '../../../components/TabBar'
import StaffList from '../../../components/StaffList'
import {groq} from "next-sanity"
import SubscriptionsList from '../../../components/SubscriptionsList'
import {client} from "../../../lib/sanity.client"
import SubLinks from '../../../components/SubLinks'
import '../../../src/styles/globals.css'

async function subscription() {

  const query = groq`
  *[_type=='subscription']{
  ...,
}| order(_createdAt asc)`
 
 const subs =  await client.fetch(query);

  

  return (

  <div>
       <div className='relative'>
          <Image
            className="contrast-50 max-w-[800px] max-h-[500px] object-cover object-center mx-auto blur-[2px] brightness-10"
            src={cooking}
            alt="cooking"
          >
          </Image>
          <div className=' text-center text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
              <p className='w-[200px] m-auto border-4 border-white py-8 px-4 my-4'>My Daily Nutrition</p>
              <p className='text-sm leading-6 my-6 md:w-3/4 md:m-auto '>Transform your health and taste buds with our nutrition-based subscription service, delivering daily updates and delicious recipes straight to your inbox</p>
              <div className='flex flex-col md:flex-row md:justify-center my-2'>
              <SubLinks/>
              </div>
           </div>
      </div>
         <h1 className='pt-8 text-center text-3xl ' id='tiers'>Subscription Plans</h1>
        <SubscriptionsList subs={subs}/>
      <div id='tab'>
         <TabBar subs={subs}/>
     </div>
    <StaffList/>
  </div>
   
  )
}

export default subscription
