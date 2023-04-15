'use client'
import React from 'react'

function SubLinks() {

    const handleClick = (e:any) => {
        e.preventDefault();
        console.log(e)
        const section = document.querySelector(e.target.hash);
        section?.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <>
          <a
                onClick={handleClick}
                className='border-2 border-white my-2 bg-white text-black md:mx-2 text-sm w-[238px] py-2 px-2'
                href="#tiers"
                >
                  Choose your subscription
                </a>
                <a className='border-2 border-white my-2 text-sm w-[238px] py-2 px-2'
              onClick={handleClick}
              href="#tab"
              >
              Find Out More
              </a>
    </>
  )
}

export default SubLinks
