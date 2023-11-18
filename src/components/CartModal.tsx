import { IProduct } from '@/type';
import React, { useState } from 'react';
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";

type IProps = {
    product: IProduct,
    setModal: any,
    handleCart: any
}

const CartModal = ({ product, handleCart, setModal }: IProps) => {
    const { image, name, price, description } = product;
    const [quantity, setQuantity] = useState(1)
    const totalPrice = (price * quantity)
    const confirmCart = () => {
        setModal(null)
        handleCart();
    }
    const minusQuantity = ()=> {
        if(quantity > 1){
            setQuantity(state => state - 1)
        }
    }
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 transition duration-350' >
            <div className='fixed top-0 left-0 right-0 bottom-0  bg-gray-900 opacity-30 transition duration-350'></div>
            <div className='md:w-[700px] absolute top-28 left-5 right-5 md:left-10 md:right-10 lg:top-[15%] lg:left-[25%] rounded-md bg-white opacity-100 p-5'>
                <div className='flex'>
                    <div className='w-[50%]'>
                        <img className='md:h-96 h-full' src={image} alt="" />
                    </div>
                    <div className='w-[50%] px-2'>
                        <h1 className='mt-3'>Name: {name}</h1>
                        <h1 className='mt-3'>Price: $ {price}</h1>
                        <h1 className='mt-3'>Description: {description}</h1>

                        <h1 className='mt-3 font-semibold'>Total Price: $ {totalPrice.toFixed(2)}</h1>
                        <div className='flex items-center mt-3'>
                            <h1>Quantity:</h1>
                            <div className='flex items-center text-xl font-semibold ml-3'>
                                <button className='mr-3 text-red-500' onClick={minusQuantity}><FiMinusSquare /></button>
                                <span>{quantity}</span>
                                <button className='ml-3 text-primary' onClick={()=> setQuantity(state => state + 1)}><FiPlusSquare /></button>
                            </div>
                        </div>
                        <div className='flex mt-10'>
                            <button className='bg-primary text-white px-5 py-0.5' onClick={confirmCart}>Ok</button>
                            <button className=' bg-gray-600 text-white px-5 py-0.5 ml-2' onClick={() => setModal(null)}>Cancel</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartModal;