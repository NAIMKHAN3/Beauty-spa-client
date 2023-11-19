import { IProduct } from '@/type';
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useState } from 'react';
import CartModal from './CartModal';
import { useCreateCartMutation } from '@/redux/feature/cart/cartApi';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks/hooks';

const Cart = ({ product }: { product: IProduct }) => {
    const router = useRouter();

    const { email } = useAppSelector(state => state.user)
    const { _id, name, image, category, price, inStock } = product;
    const modifyName = name.split(" ")
    const updateName = modifyName[0] + " " + modifyName[1] + " " + modifyName[2]
    const [modal, setModal] = useState<null | IProduct>(null)
    const [createCart] = useCreateCartMutation();
    const handleCart = async (quantity: number) => {
        const data = {
            product: _id,
            quantity
        }
        try {
            const result = await createCart(data).unwrap();
            if (result.success) {
                toast.success(result.message)
            }
        }
        catch (err: any) {
            toast.error(err?.data.message || "Cart Added Failed")
        }
    }
    const handleModal = (product: IProduct) => {
        if (!email) {
            if (typeof window === "undefined") {
                return null
            }
            return router.push('/signin')
        }
        setModal(product)
    }
    return (
        <div className='border p-2'>

            {
                inStock ? <span className='bg-primary px-3 py-1 rounded-full text-white text-xs'>In Stock</span> :
                    <span>Out Stock</span>
            }

            <img className='h-52 mx-auto mt-1' src={image} alt="" />
            <div className='mt-3'>
                <h1>{updateName}</h1>
                <h1 className='mt-1'>Price: $ {price}</h1>
            </div>
            <div className='flex justify-center items-center bg-secondary hover:bg-primary duration-200 text-white w-full py-1 mt-3 rounded-sm cursor-pointer' onClick={() => handleModal(product)}>
                <AiOutlineShoppingCart />
                <button className='ml-2'> ADD TO CART</button>
            </div>
            {
                modal ? <CartModal product={product} setModal={setModal} handleCart={handleCart} /> : null
            }
        </div>
    );
};

export default Cart;