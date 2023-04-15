
'use client'
import React, {useState} from 'react'
import { RichTextComponents } from './RichTextComponents';
import { PortableText } from '@portabletext/react';

function MealPlan({meals}:any) {
    const [currentObject, setCurrentObject] = useState(0);

    function showNextObject() {
      setCurrentObject((currentObject + 1) % meals.length);
    }
  
    const current = meals[currentObject];
  
    return (
      <div>
        <h2>{current.title}</h2>
        <p>{current.desc}</p>
        <section>
            <PortableText value={current.body} 
            components={RichTextComponents}/>
        </section>
        <button 
        
        onClick={showNextObject}>Next Meal</button>
      </div>
    );
  
}

export default MealPlan
