"use client"
import { useGetProductByCategoryQuery } from '@/redux/feature/product/productApi';
import React from 'react';
import Cart from './Cart';
import { IProduct } from '@/type';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import LoadingSection from './LoadingSection';

const Shoes = () => {

    const { data, isLoading } = useGetProductByCategoryQuery("6557ab61694af46f8899e774")
    const shoes = data?.data?.slice(0, 4)
    return (
        <div className='max-w-7xl mx-auto mt-10 p-2'>
            <h1 className='text-xl text-primary my-5 font-semibold'>Shoes</h1>
            <div className='md:flex items-center gap-3'>
                {
                    isLoading ? <LoadingSection/> : <div className='md:w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 '>
                    {
                        shoes?.map((sunglass: IProduct) => <Cart key={sunglass._id} product={sunglass} />)
                    }
                </div>
                }
                
                <div className='md:w-[10%] text-primary hover:text-secondary font-semibold flex justify-center items-center'>
                    <Link href={`/products`}>
                        <div className='flex justify-center items-center'>
                            <h1 className='mr-1'>All Shoes</h1>
                            <FaArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Shoes;