"use client"
import React, {useEffect, useState} from 'react'
import food from '../public/food.jpg'
import Image from 'next/image'
import urlFor from "../lib/urlFor"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

  type Props = {
    subs: any[];
}
   

function TabBar({subs}:Props) {

    const [activeTabIndex, setActiveTabIndex] = useState("");

  
  return (
    <>
       <hr className="border-1 border-cyan-400 m-4" />
       <div className='md:p-8'>
        <Tabs value="html">
          <TabsHeader>
            {subs.map(({ name }) => (
              <Tab color={'blue'} key={name} value={name}>
                    <button className={`font-bold py-2 border-b-4 transition-colors duration-300 ${
                name === activeTabIndex
                  ? 'border-cyan-400'
                  : 'border-transparent hover:border-gray-400'
              }`}
              onClick={()=>{setActiveTabIndex(name)}}
              >{name}</button>
            
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            
            {activeTabIndex === "" ? (
        
                <div className='pb-12 pt-4 px-4 flex flex-col m-auto place-items-center'>
                    <p className='text-black text-center text-3xl my-2 text-cyan-500 font-bold'>Start Your Journey Today!</p>
                    <p className='text-black text-center text-3xl my-2 '>Take A Look At Our Plans And See Which One <span className='underline decoration-cyan-500'>Suits You!</span></p>  
                    <Image
                    className='max-w-[400px] max-h-[400px] my-2'
                    src={food}
                    alt='food'
                    />
                </div>
           
            ) : (
                subs.map(({ name, value, desc, price, mainImage }) => (
                    <TabPanel key={name} value={name}>
                      <div className='mx-8 flex flex-col md:flex-row md:mx-auto md:justify-center py-8'>
                          <div className="relative max-w-[400px] max-h-[400px] object-cover object-center">
                              <Image 
                              width={400}
                              height={400}
                              
                              alt='recipe'
                              src={urlFor(mainImage).url()}
                              
                              />
                          </div>
                          <div className='p-2 md:mx-2 md:m-auto md:w-1/2'>
                          <p className='my-2 font-bold text-center md:text-left '>{name} ${price}/month</p>
                          <p className='text-left'>{desc}</p>
                          </div>
                      </div>
                    </TabPanel>
                  ))
            )}
          </TabsBody>
        </Tabs>
        </div>
       </>
  )
}

export default TabBar
