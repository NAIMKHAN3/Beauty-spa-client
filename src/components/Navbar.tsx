'use client'
import React, { useEffect } from 'react';
import List from './List';
import Link from 'next/link';


import toast, { Toaster } from 'react-hot-toast';
import { getInfoToLocal } from '@/share/getInfoToLocal';
import MobileNavbar from './MobileNavbar';

const MainNavbar = () => {
    const email = null;
    const profileImg = null
    const userInfo = getInfoToLocal('user')

    const logout = () => {
        toast.success('Logout Success')
    }
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
                            <Link href="/cinema"><List>Products</List></Link>
                            <Link href="/about"><List>About</List></Link>
                            {
                                email ? <div className='flex items-center'>
                                    {
                                        profileImg ? <Link href="/dashboard/profile"><List><img className='w-12 h-12 rounded-full border p-1 border-[#00246a]' src={profileImg as string} alt="" /></List></Link> : null
                                    }
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