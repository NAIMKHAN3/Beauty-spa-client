import React from 'react';
import CartSkeleton from './CartSkeleton';

const LoadingSection = () => {
    return (
        <div className='md:flex items-center gap-3 w-[90%]'>
            <div className='md:w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 '>
                <CartSkeleton />
                <CartSkeleton />
                <CartSkeleton />
                <CartSkeleton />
            </div>
            <div>
            </div>
        </div>
    );
};

export default LoadingSection;