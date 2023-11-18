"use client"
import Cart from '@/components/Cart';
import Pagination from '@/components/Pagination';
import { useGetCategoryQuery } from '@/redux/feature/category/categoryApi';
import { useGetProductsQuery } from '@/redux/feature/product/productApi';
import { ICategory, IProduct } from '@/type';
import React, { useEffect, useState } from 'react';

const products = () => {
    const [page, setPage] = useState(1)
    const [limit,setLimit] = useState(10)
    const [selectCategory, setSelectCategory] = useState<string| null>(null)
    const [totalPages, setTotalPages] = useState(1)
    const { data, isLoading } = useGetProductsQuery({page, limit, selectCategory});
    const { data: categorys, isLoading: categoryLoading} = useGetCategoryQuery(null);

    useEffect(()=>{
        if(data){
            setTotalPages(data?.meta?.totalPages)
        }
    },[selectCategory, data])
    if (categoryLoading) {
        return
    }
    if (isLoading) {
        return
    }
   
    return (
        <div className='my-5 max-w-7xl mx-auto'>
            <div className='flex justify-end items-center'>
            <button className={` text-white mr-2 px-3 py-1 rounded-sm ${selectCategory? "bg-secondary" : "bg-primary"}`} onClick={()=> setSelectCategory(null)}>All Products</button>
                {
                    categorys.data.map((category:ICategory) => <button className={`text-white mr-2 px-3 py-1 rounded-sm ${category._id === selectCategory? "bg-primary" : "bg-secondary" }`} onClick={()=> setSelectCategory(category._id as string)}>{category.name}</button>)
                }
            </div>
            <div className=' my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    data?.data.map((product: IProduct) => <Cart key={product._id} product={product} />)
                }
            </div>
            <Pagination currentPage={page} totalPages={totalPages} setCurrentPage={setPage} />
        </div>
    );
};

export default products;