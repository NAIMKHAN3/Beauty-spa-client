'use client'
import React, { useEffect, useState } from 'react';
import List from './List';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from 'react-hot-toast';
import { getInfoToLocal } from '@/share/getInfoToLocal';
import MobileNavbar from './MobileNavbar';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { removeUser, userAdded } from '@/redux/feature/user/userSlice';
import { FiLogOut } from 'react-icons/fi';
import { isLogin } from '@/share/IsLogin';

const MainNavbar = () => {
    const [hover, setHover] = useState(false);
    const [state, setState] = useState(false);
    const { email, name } = useAppSelector((state: any) => state.user)
    const dispatch = useAppDispatch();
    let profileName = name ? name : ""
    const userInfo = getInfoToLocal('user')

    const data = Cookies.get('token');
    let decoded = data ? jwtDecode(data) : null;

    const logout = () => {
        const signout = Cookies.remove('token')
        dispatch(removeUser())
        toast.success('Logout Success')
    }
    const login = isLogin()
    useEffect(() => {
        if (!login) {
            const signout = Cookies.remove('token')
            dispatch(removeUser())
        }else if (decoded) {
            dispatch(userAdded(decoded))
        } 
    }, [data, decoded, login])
    return (
        <div onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
            <Toaster />
            <div className='hidden lg:block bg-gray-200 z-50 ' >
                <div className='flex justify-between items-center px-24  border py-2'>
                    <div className='flex items-center'>
                        <img className='h-10 w-full' src="https://res.cloudinary.com/droyjiqwf/image/upload/v1700263151/uploads/jcv75iikipskbe9spesf.png" alt="" />
                    </div>
                    <div>
                        <ul className='flex justify-between items-center'>
                            <Link href="/"><List>Home</List></Link>
                            <Link href="/products"><List>Products</List></Link>
                            {
                                email ? <div className='flex items-center'>

                                    <Link href={'/cart'}><button className='text-2xl text-secondary hover:text-primary mr-2'> <GrCart /> </button></Link>
                                    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='cursor-pointer'>

                                        <div className='w-8 h-8 rounded-full border bg-primary text-white flex justify-center items-center' >{profileName.slice(0, 1)} </div>
                                    </div>

                                </div> :
                                    <Link href="/signin"><List>SignIn</List></Link>
                            }
                            <div className={`bg-gray-100 text-secondary absolute top-11 right-3 rounded-md z-[99999] ${hover ? 'visible' : 'invisible'} `} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                                <ul >

                                    <Link href="/my-order"><li className='border-b px-5 py-2 flex items-center'>  My order</li></Link>
                                    <button className='border-b px-5 py-2 cursor-pointer flex items-center' onClick={logout}> Sign out</button>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <MobileNavbar />
        </div>
    );
};

export default MainNavbar;