'use client'

import React, {useState,} from 'react'
import recipe from '../schemas/recipe';
import { RichTextComponents } from './RichTextComponents';
import { PortableText } from '@portabletext/react';
import { useSession } from "next-auth/react"

function RecipeList({recipes}:any) {
 
const [currentObject, setCurrentObject] = useState(0);

function showNextObject() {
  setCurrentObject((currentObject + 1) % recipes.length);
}

const current = recipes[currentObject];
const { data: session } = useSession()


  if (session) {
    return (
      <div>
        <h1 className='text-center text-xl mb-4 font-bold text-cyan-500'>Recipes curated for you</h1>
        <div className='border-2 border-cyan-500 rounded-xl p-4'>
        <h2 className='text-center mb-2 font-bold'>{current.title}</h2>
        <p>{current.desc}</p>
        <section>
            <PortableText value={current.body} 
            components={RichTextComponents}/>
        </section>
        </div>
        <div className='text-center'>
            <button 
            className='py-2 px-6 bg-cyan-500 rounded-xl mt-4 font-bold text-white'
            onClick={showNextObject}>Next Recipe</button>
        </div>
      </div>
    );
    }

    return(
      <>
      </>
    )
}
export default RecipeList
