'use client';
import Link from 'next/link';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const ListingItems = () => {
    const [products, setproducts] = useState([]);

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/product/getall');
        console.log(res.status);
        const data = await res.json();
        console.table(data);
        setproducts(data);
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    const displayProducts = () => {
        return products.map((product, index) => (
            // <Link key={product._id}
            //     className="group block rounded-xl overflow-hidden focus:outline-none"
            //     href="#"
            // >
            //     <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            //         <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
            //             <img
            //                 className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
            //                 src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
            //                 alt="Blog Image"
            //             />
            //         </div>
            //         <div className="grow">
            //             <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
            //                 {product.title}
            //             </h3>
            //             <h1>{product.price}</h1>
            //             <p className="mt-3 text-gray-600 dark:text-neutral-400">
            //                 {product.description}
            //             </p>
            //             <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
            //                 Read more
            //                 <svg
            //                     className="shrink-0 size-4"
            //                     xmlns="http://www.w3.org/2000/svg"
            //                     width={24}
            //                     height={24}
            //                     viewBox="0 0 24 24"
            //                     fill="none"
            //                     stroke="currentColor"
            //                     strokeWidth={2}
            //                     strokeLinecap="round"
            //                     strokeLinejoin="round"
            //                 >
            //                     <path d="m9 18 6-6-6-6" />
            //                 </svg>
            //             </p>
            //         </div>
            //     </div>
            // </Link>
            <div key={product._id} className="bg-white border rounded-lg shadow-lg p-6">
            <img 
              src={product.imageUrl} 
              alt={product.title} 
              className="rounded-lg w-full h-64 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-gray-800 mb-4">{product.price}</p>
            <Link 
              href={`/product/${product.id}`} 
              className="block bg-gray-800 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-gray-700"
            >
              View Details
            </Link>
          </div>
        ))
    }
    return (
        <>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div>
                    <h1 className='text-center text-5xl text-gray-800 font-bold'>Our Products</h1>
                </div>
                {/* Grid */}
                <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                    {displayProducts()}
                </div>
                {/* End Grid */}
            </div>
        </>
    )
}

export default ListingItems;