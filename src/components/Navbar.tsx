'use client'
import React, { useEffect } from 'react';
import List from './List';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from 'react-hot-toast';
import { getInfoToLocal } from '@/share/getInfoToLocal';
import MobileNavbar from './MobileNavbar';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { removeUser, userAdded } from '@/redux/feature/user/userSlice';

const MainNavbar = () => {
    const { email, name } = useAppSelector((state: any) => state.user)
    const dispatch = useAppDispatch();
    let profileName = name ? name : ""
    const userInfo = getInfoToLocal('user')

    const data = Cookies.get('token');
    const decoded = data ? jwtDecode(data) : null;

    const logout = () => {
        toast.success('Logout Success')
    }
    useEffect(() => {
        if (decoded) {
            dispatch(userAdded(decoded))
        } else {
            dispatch(removeUser())
        }
    }, [data, decoded])
    return (
        <div>
            <Toaster />
            <div className='hidden lg:block bg-gray-200'>
                <div className='flex justify-between items-center px-24  border py-2'>
                    <div className='flex items-center'>
                        <img className='h-10 w-full' src="https://res.cloudinary.com/droyjiqwf/image/upload/v1700263151/uploads/jcv75iikipskbe9spesf.png" alt="" />
                    </div>
                    <div>
                        <ul className='flex justify-between items-center'>
                            <Link href="/"><List>Home</List></Link>
                            <Link href="/products"><List>Products</List></Link>
                            <Link href="/about"><List>About</List></Link>
                            {
                                email ? <div className='flex items-center'>

                                    <Link href={'/cart'}><button className='text-2xl text-secondary hover:text-primary mr-2'> <GrCart /> </button></Link>
                                    <div className='w-8 h-8 rounded-full border p-1 bg-primary text-white flex justify-center items-center'>{profileName.slice(0, 1)} </div>

                                </div> :
                                    <Link href="/signin"><List>SignIn</List></Link>
                            }

                        </ul>
                    </div>
                </div>
            </div>
            <MobileNavbar />
        </div>
    );
};

export default MainNavbar;