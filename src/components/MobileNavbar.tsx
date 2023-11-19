'use client'
import { AiOutlineMenu, } from 'react-icons/ai';
import Cookies from "js-cookie"
import { ImCross } from 'react-icons/im';
import { useEffect, useState } from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import List from './List';
import { removeUser, userAdded } from '@/redux/feature/user/userSlice';
import { isLogin } from '@/share/IsLogin';
import { jwtDecode } from "jwt-decode";


const MobileNavbar = () => {
    const { email, name } = useAppSelector((state) => state.user)
    let profileName = name ? name : "";
    const dispatch = useAppDispatch();


    const [isOpen, setIsOpen] = useState(false);
    const [state, setState] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen((value) => !value);
    };
    const logout = () => {
        const signout = Cookies.remove('token')
        dispatch(removeUser())
        toggleIsOpen()
        toast.success('Logout Success')
    }
    const login = isLogin()
    const data = Cookies.get('token');
    let decoded = data ? jwtDecode(data) : null;
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
            <div className="lg:hidden bg-gray-200 mt-2 px-5 flex items-center justify-between py-2 transition duration-700">
                <div className="flex justify-center items-center">
                    <Link href='/'>
                        <div className='flex items-center'>
                            <img className='h-8 w-full' src="https://res.cloudinary.com/droyjiqwf/image/upload/v1700263151/uploads/jcv75iikipskbe9spesf.png" alt="" />
                        </div>
                    </Link>
                </div>


                <div>
                    <p
                        className="flex justify-center items-center px-2 py-1 text-primary rounded cursor-pointer"
                        onClick={toggleIsOpen}
                    >
                        <span>
                            <AiOutlineMenu className="text-2xl mr-1" />
                        </span>
                    </p>
                </div>
            </div>
            <div className="lg:hidden">
                <div
                    className={`absolute top-0 duration-700   ${isOpen ? "left-0 duration-700" : "left-[-1200px]"
                        } z-30 bg-white w-full p-3 min-h-screen`}>
                    <p className={` absolute top-5 right-2  text-primary py-1 cursor-pointer`}
                        onClick={toggleIsOpen}>
                        <span>
                            <ImCross className="text-xl  mr-1" />
                        </span>
                    </p>
                    {
                        name ? <div className='border-b pb-5'>
                            <div className='cursor-pointer flex justify-center'>

                                <div className='w-24 h-24 rounded-full border bg-primary text-white flex justify-center items-center my-5' >{profileName.slice(0, 1)} </div>
                            </div>
                            <h1 className='text-center text-lg text-primary font-semibold'>Name : {name}</h1>
                        </div> : null
                    }
                    <div className='text-primary'>
                        <Link href='/'><Paragraph className={" py-3 border-b"}> <span className='hover:bg-white font-semibold hover:text-secondary duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>Home</span> </Paragraph></Link>
                        <Link href='/products'><Paragraph className={"py-3 border-b"}><span className='hover:bg-white font-semibold hover:text-secondary duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>Products</span> </Paragraph></Link>
                        {
                            email ? <>
                            <Link href='/cart'><Paragraph className={"py-3 border-b"}><span className='hover:bg-white font-semibold hover:text-secondary duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>My Cart</span> </Paragraph></Link>
                            <Link href='/my-order'><Paragraph className={"py-3 border-b"}><span className='hover:bg-white font-semibold hover:text-secondary duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>My Order</span> </Paragraph></Link>
                            
                           <button onClick={logout} className='bg-secondary mt-5 ml-3 hover:bg-primary text-white px-3 py-1 rounded-md'>Logout</button>
                            </>
                                : <>
                                    <Link href='/signin'><Heading className={"py-3 border-b"}><span className='hover:bg-white font-semibold hover:text-secondary duration-300 cursor-pointer px-5 py-2 rounded-md' onClick={toggleIsOpen}>Sign In</span></Heading></Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;