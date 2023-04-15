import { useSession, signIn, signOut } from "next-auth/react"
import SignInForm from "../../../components/SignInForm"
import {client} from "../../../lib/sanity.client"
import FetchUserData from "../../../components/FetchUserData"
import '../../../src/styles/globals.css'
import { groq } from "next-sanity";
import { useEffect, useState } from "react"
import TipsList from "../../../components/TipsList"
import RecipeList from "../../../components/RecipeList"
import MealPlan from "../../../components/MealPlan"
import user from "../../../schemas/user"

const query = groq`
*[_type=='user']{
...,
}
`
const recipeQuery = groq`
*[_type=='recipe']{
...,
}
`
const tipsQuery = groq`
*[_type=='DailyTip']{
...,
}
`
const mealQuery = groq`
*[_type=='mealPlan']{
...,
}
`

 async function dashboard() {
 
  const userQuery = await client.fetch(query)
  const recipes = await client.fetch(recipeQuery)
  const tips = await client.fetch(tipsQuery)
  const meals = await client.fetch(mealQuery)


return(
  <>
    <hr className="border-cyan-400 border-1 mb-4 mx-8"/>
    <div className="flex flex-col place-items-center m-auto">
        <div className="md:w-[600px]">
          <section className="mx-6">
            <FetchUserData userQuery={userQuery}/>
          </section>
          <section className="my-8 mx-6">
            <TipsList tips={tips}/>
          </section>
          <section className="my-8 mx-6">
            <RecipeList recipes={recipes}/>
          </section>
        </div>
    </div>
  </>
)
 


}

export default dashboard