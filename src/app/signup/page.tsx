"use client"
import React, { useState } from 'react';
import { useForm, } from "react-hook-form"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import FormInput from '@/components/FormInput';
import Link from 'next/link';
import { signupSchema } from '@/schema/signupSchema';
import { useSignupUserMutation } from '@/redux/feature/auth/authApi';
import { userAdded } from '@/redux/feature/user/userSlice';
import Cookies from "js-cookie"

type IData = {
  email: string;
  password: string;
  address: string;
  name: string;
  phoneNumber: string;
}
const SignUp = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const [createUser] = useSignupUserMutation();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(signupSchema) });
  const onSubmit = async (data: IData) => {
    try {
      const result = await createUser(data).unwrap();
      if (result?.accessToken) {
        Cookies.set('token', result.accessToken, { expires: new Date(Date.now() + 2 * 60 * 1000) });
        dispatch(userAdded(result.data))
        toast.success("Sign up Success")
        if (typeof window === "undefined") {
          return null
        }
        router.push('/')
      }
    }
    catch (err: any) {
      toast.error(err?.data.message || "Sign up Failed")
    }

  }
  return (
    <div className="md:w-1/3 mx-auto border rounded-md py-3 px-4 mt-10 bg-pink-50 shadow-md">
      <h1 className='text-center my-10 font-semibold'>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput register={register} type='text' name='name' lebel='Your Name' placeholder='name' error={errors} />
        <FormInput register={register} type='text' name='address' lebel='Your Address' placeholder='address' error={errors} />
        <FormInput register={register} type='text' name='phoneNumber' lebel='Your Phone' placeholder='phone' error={errors} />
        <FormInput register={register} type='email' name='email' lebel='Your Email' placeholder='email' error={errors} />
        <FormInput register={register} type='password' name='password' lebel='Your password' placeholder='password' error={errors} />
        <h1 className='text-center'>Already Have an account please <Link href={'/signin'}><span className='text-primary'>sign in</span></Link> </h1>
        <button className='w-full bg-primary my-5 text-white py-1 rounded-md' type="submit">Signup</button>
      </form>

    </div>
  );
};

export default SignUp;