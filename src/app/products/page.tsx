"use client"
import Cart from '@/components/Cart';
import { useGetCategoryQuery } from '@/redux/feature/category/categoryApi';
import { useGetProductsQuery } from '@/redux/feature/product/productApi';
import { ICategory, IProduct } from '@/type';
import React, { useState } from 'react';

const products = () => {
    const { data, isLoading } = useGetProductsQuery(null);
    const { data: categorys, isLoading: categoryLoading} = useGetCategoryQuery(null);
    const [selectCategory, setSelectCategory] = useState(null)

    if (categoryLoading) {
        return
    }
    if (isLoading) {
        return
    }
    return (
        <div className='my-5 max-w-7xl mx-auto'>
            <div className='flex justify-end items-center'>
            <button className={` text-white mr-2 px-3 py-1 rounded-sm ${selectCategory? "bg-secondary" : "bg-primary"}`}>All Products</button>
                {
                    categorys.data.map((category:ICategory) => <button className={`bg-secondary text-white mr-2 px-3 py-1 rounded-sm`}>{category.name}</button>)
                }
            </div>
            <div className=' my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    data.data.map((product: IProduct) => <Cart key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default products;