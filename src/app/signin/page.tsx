"use client"
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import FormInput from '@/components/FormInput';
import Link from 'next/link';
import { signinSchema } from '@/schema/signin';
import { useLoginUserMutation } from '@/redux/feature/auth/authApi';
import Cookies from "js-cookie"
import { userAdded } from '@/redux/feature/user/userSlice';

type IData = {
  email: string;
  password: string;
}
const Signin = () => {
  const data = Cookies.get('refreshToken');
  console.log(data)
  const router = useRouter()
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(signinSchema) });
  const onSubmit = async (data: IData) => {
    try {
      const result = await loginUser(data).unwrap();
      if (result?.accessToken) {
        Cookies.set('token', result.accessToken, { expires: new Date(Date.now() + 2 * 60 * 1000) });
        dispatch(userAdded(result.data))
        toast.success("Login Success")
        if (typeof window === "undefined") {
          return null
      }
        router.push('/')
      }
    }
    catch (err: any) {
      toast.error(err?.data.message || "Login Failed")
    }

  }
  return (
    <div className="md:w-1/3 mx-auto border rounded-md py-3 px-4 mt-10 bg-pink-50 shadow-md">
      <h1 className='text-center my-10 font-semibold'>Sign in</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <FormInput register={register} type='email' name='email' lebel='Your Email' placeholder='email' error={errors} />
        <FormInput register={register} type='password' name='password' lebel='Your password' placeholder='password' error={errors} />
        <h1 className='text-center'>New to beauty spa please <Link href={'/signup'}><span className='text-primary'>sign up</span></Link> </h1>
        <button className='w-full bg-primary my-5 text-white py-1 rounded-md' type="submit">Signin</button>
      </form>

    </div>
  );
};

export default Signin;