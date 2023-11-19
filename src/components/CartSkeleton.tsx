import React from 'react';

const CartSkeleton = () => {
    return (
        <div className="border  p-4">
        <div className="animate-pulse">
        <div className="h-4 w-1/4 bg-gray-300 rounded-full mb-2"></div>
          <div className="h-52 bg-gray-300  mb-4"></div>
          <div className="mt-3">
            <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
          </div>
          <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
        </div>
  
        {/* Buttons */}
        <div className="mt-4 animate-pulse">
          <button className="text-sm text-white w-full h-8 ml-1 bg-[#474747] rounded-sm"></button>
        </div>
      </div>
    );
};

export default CartSkeleton;