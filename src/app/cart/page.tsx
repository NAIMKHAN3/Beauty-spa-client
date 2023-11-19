"use client"
import { useGetCartQuery, useRemoveProductMutation } from '@/redux/feature/cart/cartApi';
import { ImCross } from "react-icons/im";
import { IProduct } from '@/type';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useCreatePaymentMutation } from '@/redux/feature/payment/paymentApi';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie"
import { isLogin } from '@/share/IsLogin';
type ICartProduct = {
    product: IProduct,
    price: number,
    quantity: number
}
const Cart = () => {
    const login = isLogin();
    const { data, isLoading } = useGetCartQuery(null)
    const [removeProduct] = useRemoveProductMutation();
    const [createPayment] = useCreatePaymentMutation();
    const router = useRouter();
   
    const handleRemove = async (product: string) => {
        try {
            const result = await removeProduct({ cart: data.data._id, product }).unwrap();
            if (result.success) {
                toast.success(result.message)
            }
        }
        catch (err: any) {
            toast.error(err?.data.message || "Remove product Failed")
        }
    }
    const handlePayment = async () => {
        try {
            const result = await createPayment({ cart: data.data._id }).unwrap();
            if (result.success) {
                if (typeof window === "undefined") {
                    return null
                }
                router.push(result?.sessionId?.url)

            }
        }
        catch (err: any) {
            toast.error(err?.data.message || "Remove product Failed")
        }
    }

        if (!login) {
            if (typeof window === "undefined") {
                return null
            }
            router.push('/signin')
        }

    if (isLoading) {
        return
    }
    return (
        <div className='my-10 max-w-6xl mx-auto'>
            {
                !data?.data || data?.product <= 0 ? <div className='h-screen flex justify-center items-center'><h1 className='text-2xl font-semibold text-secondary'>Cart Empty</h1></div> :
                    <div>
                        {
                            data.data.product.map((product: ICartProduct, index: number) => <div key={index} className='border m-4 py-3 px-5 flex justify-between items-center'>

                                <img className='w-24 h-24' src={product.product.image} alt="" />

                                <h1>{product.product.name}</h1>

                                <h1>Quantity: {product.quantity}</h1>

                                <h1>Price: $ {product.price}</h1>
                                <button className='text-2xl hover:text-red-500 text-secondary' onClick={() => handleRemove(product.product._id)}> <ImCross /> </button>
                            </div>)
                        }
                        <div className='flex justify-end items-center px-4 mt-10'>
                            <h1 className='font-semibold'>Total Price: $ {data?.data?.totalPrice}</h1>
                            <button className='bg-secondary hover:bg-primary text-white px-4 py-1 ml-2' onClick={handlePayment}>Payment</button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Cart;