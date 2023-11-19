"use client"
import { useGetProductByCategoryQuery } from '@/redux/feature/product/productApi';
import React from 'react';
import Cart from './Cart';
import { IProduct } from '@/type';
import { FaArrowRight } from "react-icons/fa";
import LoadingSection from './LoadingSection';
import Link from 'next/link';

const Watch = () => {

    const { data, isLoading } = useGetProductByCategoryQuery("65576fc0694af46f8899e76e")

    const watches = data?.data?.slice(0, 4)
    return (
        <div className='max-w-7xl mx-auto mt-10 p-2'>
            <h1 className='text-xl text-primary my-5 font-semibold'>Watch</h1>
            <div className='md:flex items-center gap-3'>
                {
                    isLoading ? <LoadingSection /> :
                        <div className='md:w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 '>
                            {
                                watches.map((watch: IProduct) => <Cart key={watch._id} product={watch} />)
                            }
                        </div>
                }




                <div className='md:w-[10%] text-primary hover:text-secondary font-semibold '>
                    <Link href={`/products`}>
                        <div className='flex justify-center items-center'>
                            <h1 className='mr-1'>All Watch</h1>
                            <FaArrowRight />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Watch;