"use client"
import { useGetOrderNumberQuery, useGetOrderQuery } from '@/redux/feature/payment/paymentApi';
import { IProduct } from '@/type';
import React, { useEffect, useState } from 'react';

type ICartProduct = {
    product: IProduct,
    price: number,
    quantity: number
}
const MyOrder = () => {
    const { data, isLoading } = useGetOrderNumberQuery(null)
    const [orderNumber, setOrderNumber] = useState<string | null>(null)
    const { data: order, isSuccess } = useGetOrderQuery(orderNumber)
    const paymentStatus = order?.data?.paymentStatus
    useEffect(() => {
        if (!orderNumber && data?.data[0]?.orderNumber) {
            setOrderNumber(data.data[0].orderNumber)
        }
    }, [data, orderNumber])
    if (isLoading) {
        return
    }
    if(!data?.data?.length){
        return <div className='h-screen flex justify-center items-center'><h1 className='text-2xl font-semibold text-secondary'>No order found</h1></div>
    }
    return (
        <div className='md:flex'>
            <div className='md:w-[20%] md:h-screen bg-pink-50 p-3'>
                <ul>
                    {
                        data?.data?.map((order: any) => <button key={order._id} className={` ${orderNumber === order.orderNumber ? "bg-primary" : "bg-secondary"}  text-white w-full px-2 py-1 my-2 rounded-sm hover:bg-primary`} onClick={() => setOrderNumber(order?.orderNumber)}>{order?.orderNumber}</button>)
                    }
                </ul>

            </div>
            <div className='md:w-[80%]'>
                {
                    order ? <div>
                        <div className='font-semibold flex justify-between mx-4 mt-3'>
                            <h1>Total Price: {order?.data?.cart?.totalPrice}</h1>
                            <h1>Payment Status: <span className={`${paymentStatus === "SUCCESS" ? "text-green-500" : paymentStatus === "FAILED" ? "text-red-500" : "text-secondary"}`}>{paymentStatus}</span></h1>
                        </div>
                        <div>
                            {
                                order?.data?.cart?.product?.map((product: ICartProduct, index: number) => <div key={index} className='border m-4 py-3 px-5 flex items-center'>
                                    <div>

                                        <img className='w-24 h-24' src={product.product.image} alt="" />
                                    </div>

                                    <div className='flex gap-4 md:justify-between items-center flex-wrap w-full px-3'>
                                        <h1>{product.product.name}</h1>

                                        <h1>Quantity: {product.quantity}</h1>

                                        <h1 className='font-semibold'>Price: $ {product.price}</h1>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div> : null
                }
            </div>
        </div>
    );
};

export default MyOrder;