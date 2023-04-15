'use client'
import React, {useState} from 'react'
import { useSession } from "next-auth/react"

function TipsList({tips}:any) {


const [currentObject, setCurrentObject] = useState(0);

  function showNextObject() {
    setCurrentObject((currentObject + 1) % tips.length);
  }

  const current = tips[currentObject];
  const { data: session } = useSession()

if (session){
  return (
    <div>
      <h1 className='text-center text-xl mb-4 font-bold text-cyan-500'>Nutrition Tips</h1>
      <div className='p-4 border-2 border-cyan-500 rounded-xl '>
        <h2 className='text-center font-bold mb-2'>{current.title}</h2>
        <p className='text-center'>{current.desc}</p>
      </div>
      <div className='text-center'>
        <button 
        className='py-2 px-6 bg-cyan-500 rounded-xl mt-4 font-bold text-white'
        onClick={showNextObject}>Next Tip</button>
      </div>
    </div>
  );
}
return(
  <>
  </>
)
}
export default TipsList
