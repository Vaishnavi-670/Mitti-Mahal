'use client';
import useWishlistContext from '@/context/WishlistContext';
import React, { useState } from 'react'

const OrderDetails = () => {
    const [order, setorder] = useState([])
    const { calculateTotalPrice} = useWishlistContext();

    
      return (
        <div className='container mx-auto'>
            <h1 className='text-4xl font-bold mb-10 text-center  text-gray-800 '>Order Details</h1>           
        </div>
        );
}


export default OrderDetails