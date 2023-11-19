"use client"
import Cart from '@/components/Cart';
import CartSkeleton from '@/components/CartSkeleton';
import Pagination from '@/components/Pagination';
import { useGetCategoryQuery } from '@/redux/feature/category/categoryApi';
import { useGetProductsQuery } from '@/redux/feature/product/productApi';
import { ICategory, IProduct } from '@/type';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const products = () => {
    const [page, setPage] = useState(1)
    const router = useRouter();
    const [limit, setLimit] = useState(10)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectCategory, setSelectCategory] = useState<string | null>(null)
    const [totalPages, setTotalPages] = useState(1)
    const { data, isLoading } = useGetProductsQuery({ page, limit, selectCategory, searchTerm });
    const { data: categorys, isLoading: categoryLoading } = useGetCategoryQuery(null);
    const handleSeach = (value: string) => {
        if (value.length > 2) {
            setSearchTerm(value)
        } else {
            setSearchTerm("")
        }
    }
    useEffect(() => {
        if (data) {
            setTotalPages(data?.meta?.totalPages)
        }
    }, [selectCategory, data, searchTerm])


    return (
        <div className='my-5 max-w-7xl mx-auto p-3'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <input className='border-2 px-3 py-1' type="text" placeholder='Search' onChange={(e) => handleSeach(e.target.value)} />
                <div className='flex flex-wrap md:justify-end items-center mt-4 md:mt-0'>
                    <button className={` text-white hover:bg-primary duration-200 mr-2 px-3 py-1 rounded-sm text-xs mt-4 md:mt-0 ${selectCategory ? "bg-secondary" : "bg-primary"}`} onClick={() => setSelectCategory(null)}>All Products</button>
                    {
                        categorys?.data.map((category: ICategory) => <button className={`text-white hover:bg-primary duration-200 mr-2 px-3 py-1 rounded-sm text-xs mt-4 md:mt-0 ${category._id === selectCategory ? "bg-primary" : "bg-secondary"}`} onClick={() => setSelectCategory(category._id as string)}>{category.name}</button>)
                    }
                </div>
            </div>
            <div className=' my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    isLoading ? <>
                        <CartSkeleton />
                        <CartSkeleton />
                        <CartSkeleton />
                        <CartSkeleton />
                        <CartSkeleton />
                        <CartSkeleton />
                        <CartSkeleton />
                        <CartSkeleton />
                    </>
                        : <>
                            {
                                data?.data.map((product: IProduct) => <Cart key={product._id} product={product} />)
                            }
                        </>
                }

            </div>
            <Pagination currentPage={page} totalPages={totalPages} setCurrentPage={setPage} />
        </div>
    );
};

export default products;