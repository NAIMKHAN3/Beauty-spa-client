import React from 'react';

const Failed = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-52 h-52 md:w-96 md:h-96' src="https://res.cloudinary.com/droyjiqwf/image/upload/v1700361339/uploads/vn41eqeacucmpupayb4h.jpg" alt="" />
                <h1 className='text-3xl font-semibold'>PAYMENT FAILED ❌</h1>
            </div>
        </div>
    );
};

export default Failed;