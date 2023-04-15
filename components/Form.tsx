'use client'

import React, {useState} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'


interface IFormInput {
    _id: string;
    name:  string;
    email: string;
    comment: string
}

export default function Form({_id}:any) {

const {register, handleSubmit, formState: { errors }  } = useForm<IFormInput>();

const [formData, setFormData] = useState<any>()
const [isSubmitting, setIsSubmitting] = useState(false)
const [hasSubmitted, setHasSubmitted] = useState(false)


const onSubmit: SubmitHandler<IFormInput> = async(data:any) => {
    setIsSubmitting(true)
    setFormData(data)
    try{
        await fetch('/api/createComment', {
            method: 'POST',
            body: JSON.stringify(data),
            // type: 'application/JSON'
        })
        setIsSubmitting(false)
        setHasSubmitted(true)
    }catch (err) {
        console.log(err)
    }
    console.log(data)
}

if (isSubmitting) {
    return <h3>Submitting comment…</h3>
  }
  if (hasSubmitted) {
    return (
      <>
      <div className='m-auto my-8 mx-6 text-left'>
        <h3 className='font-bold'>Thanks for your <span className='text-cyan-400'>comment!</span></h3>
        <div>
          <p className='my-2'>Name: {formData.name}</p>
          <p className='my-2'>Email: {formData.email}</p>
          <p className='my-2'>Comment: {formData.comment}</p>
        </div>
      </div>
      </>
    )
  }

  return (
    <div>
      <hr className=' m-auto border-cyan-300 my-8 mx-8'/>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-center max-w-2xl self-center m-auto p-5 my-10">
      <h3 className='text-cyan-500 text-3xl font-bold my-2'>Share your thoughts...</h3>
      <h4 className='text-2xl my-2'>Comment below!</h4>
      <input {...register("_id", { required: true })} type="hidden" name="_id" value={_id} />
        <label className='block mb-5 text-gray-700 mt-2'>
            Name:
        </label>
        <input className='w-full outline-none focus:ring ring-cyan-300 shadow border rounded py-2 px-3 form-input mt-1 block' {...register("name", { required: true })}/>
        <label className='block mb-5 text-gray-700 mt-2'>
            Email:
        </label>
        <input  className='w-full outline-none focus:ring ring-cyan-300 shadow border rounded py-2 px-3 form-input mt-1 block'{...register("email", { required: true })}/>
        <label className='block mb-5 text-gray-700 mt-2'>
            Comment:
        </label>
        <textarea className='w-full outline-none focus:ring ring-cyan-300 shadow border rounded py-2 px-3 form-input mt-1 block outline-none shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-syan-300' rows={8} {...register("comment", { required: true })}/>
        <div className='flex flex-col p-5'>
          {errors.name && (
            <span className='text-red-500'>- The Name Field is required</span>
          )}
          {errors.email && (
            <span className='text-red-500'>- The Email Field is required</span>
          )}
          {errors.comment && (
            <span className='text-red-500'>- The Comment Field is required</span>
          )}
          </div>     
        <input className='mt-4 py-3 rounded m-auto px-6 bg-cyan-300' type='submit'/>
      </form>
    </div>
  )
}
