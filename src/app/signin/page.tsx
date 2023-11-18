"use client"
import React, { useState } from 'react';
import { useForm, } from "react-hook-form"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {yupResolver} from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import FormInput from '@/components/FormInput';
import Link from 'next/link';
import { signinSchema } from '@/schema/signin';

type IData = {
    email: string;
    password: string;
}
const Signin = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({resolver: yupResolver(signinSchema)});
  const onSubmit = async (data:IData) => {
  

  }
  return (
    <div className="max-w-6xl mx-auto">
        <h1 className='text-center my-10 font-semibold'>Sign in</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='w-1/3 mx-auto'>
            <FormInput register={register} type='email' name='email' lebel='Your Email' placeholder='email' error={errors} />
            <FormInput register={register} type='password' name='password' lebel='Your password' placeholder='password' error={errors} />
            <h1 className='text-center'>New to beauty spa please <Link href={'/signup'}><span className='text-primary'>sign up</span></Link> </h1>
            <button className='w-full bg-primary my-5 text-white py-1 rounded-md' type="submit">Signin</button>
          </form>
        
    </div>
  );
};

export default Signin;