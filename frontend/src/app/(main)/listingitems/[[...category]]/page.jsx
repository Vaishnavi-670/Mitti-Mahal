'use client';
import { IconSearch } from '@tabler/icons-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const ListingItems = () => {

    const [products, setproducts] = useState([]);
    const [masterList, setMasterList] = useState([]);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const searchRef = useRef();
    const router = useRouter();

    const handleWishlistClick = () => {
        setIsWishlisted(!isWishlisted);
        // Here you can also add functionality to save the wishlist state in a database or local storage
    };
    const handleSearch = () => {
        const search = searchRef.current.value;
        if (search) {
            setproducts(masterList.filter( (product) => {
                return product.title.toLowerCase().includes(search.toLowerCase())
            } ))
        }else{
            setproducts(masterList);
        }
    };

    const { category } = useParams();
    console.log(category);


    const fetchProducts = async () => {
        let res;
        if (category && category[0]) {
            res = await fetch('http://localhost:5000/product/getbycategory/' + category[0]);
        } else {
            res = await fetch('http://localhost:5000/product/getall');
        }
        console.log(res.status);
        const data = await res.json();
        console.table(data);
        setproducts(data);
        setMasterList(data);
    }
    useEffect(() => {
        fetchProducts();
    }, [category]);

    const filterCategory = (category) => {
        if(category){
            router.push('/listingitems/'+category)
        }
    }

    const displayProducts = () => {
        return products.map((product, index) => (

            <div key={product._id} className="bg-white border rounded-lg shadow-lg p-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-lg w-full h-64 object-cover mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mt-4 flex mb-1 justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                    <button
                        onClick={handleWishlistClick}
                        className={`px-4 py-2  rounded-full ${isWishlisted ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-900'
                            } hover:bg-red-500 hover:text-white transition duration-300`}
                    >
                        {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    </button>
                </div>
                <Link
                    href={`/product/${product._id}`}
                    className="block bg-gray-800 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-gray-700"
                >
                    View Details
                </Link>
            </div>
        ))
    }
    return (
        <>
            <div className="relative overflow-hidden">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 ">
                            Mitti Mahal Insights
                        </h1>
                        <p className="mt-3 text-gray-600 ">
                            Discover the beauty and craftsmanship of clay products, along with expert tips and insights.
                        </p>
                        <div className="mt-10 max-w-6xl mx-auto  relative">
                            {/* Search Form */}
                            
                                <div className="relative z-10 flex gap-x-3 p-1 bg-white border rounded-3xl shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                                    <div className="w-full flex">
                                        <label
                                            htmlFor="search-insights"
                                            className="block text-sm text-gray-700 font-medium "
                                        >
                                            <span className="sr-only">Search insights</span>
                                        </label>
                                        <input
                                            type="text"
                                            ref={searchRef}
                                            id="search-insights"
                                            className="py-1.5 px-4 h-full block w-full border-transparent rounded-3xl  dark:bg-neutral-900 dark:border-transparent dark:text-neutral-200 dark:placeholder-neutral-300 dark:focus:ring-neutral-400"
                                            placeholder="Search By Category"
                                        />
                                        <button
                                            onClick={handleSearch}
                                            className="px-4  text-white rounded-md "
                                        >
                                            <IconSearch className='size-11 inline-flex justify-center   font-normal rounded-3xl items-center gap-x-2 ' />
                                        </button>
                                    </div>

                                </div>
                            
                            {/* End Search Form */}
                            {/* Decorative SVG Element */}
                            <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                                <svg
                                    className="w-16 h-auto text-orange-500"
                                    width={121}
                                    height={135}
                                    viewBox="0 0 121 135"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                        stroke="currentColor"
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                                <svg
                                    className="w-40 h-auto text-cyan-500"
                                    width={347}
                                    height={188}
                                    viewBox="0 0 347 188"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                                        stroke="currentColor"
                                        strokeWidth={7}
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                        </div>
                        
                        <div className="mt-16 ">
                            {/* Categories */}
                            <button
                            onClick={() => filterCategory('Crafting')}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"                              
                            >
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                                 Crafting
                            </button>
                            <button
                            onClick={() => filterCategory('Handmade')}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler shrink-0 size-4 icons-tabler-filled icon-tabler-flower"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 1a4 4 0 0 1 4 4l-.002 .055l.03 -.018a3.97 3.97 0 0 1 2.79 -.455l.237 .056a3.97 3.97 0 0 1 2.412 1.865a4.01 4.01 0 0 1 -1.455 5.461l-.068 .036l.071 .039a4.01 4.01 0 0 1 1.555 5.27l-.101 .186a3.97 3.97 0 0 1 -5.441 1.468l-.03 -.02l.002 .057a4 4 0 0 1 -3.8 3.995l-.2 .005a4 4 0 0 1 -4 -4l.001 -.056l-.029 .019a3.97 3.97 0 0 1 -2.79 .456l-.236 -.056a3.97 3.97 0 0 1 -2.413 -1.865a4.01 4.01 0 0 1 1.453 -5.46l.07 -.038l-.071 -.038a4.01 4.01 0 0 1 -1.555 -5.27l.1 -.187a3.97 3.97 0 0 1 5.444 -1.468l.026 .018v-.055a4 4 0 0 1 3.8 -3.995zm0 8a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" /></svg>
                                Handmade 
                            </button>
                            <button
                            onClick={() => filterCategory('Tableware')}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler shrink-0 size-4 icons-tabler-outline icon-tabler-brand-airtable"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 10v8l7 -3v-2.6z" /><path d="M3 6l9 3l9 -3l-9 -3z" /><path d="M14 12.3v8.7l7 -3v-8z" /></svg>
                                Tableware
                            </button>
                            <button
                            onClick={() => filterCategory('Jewellery')}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            >
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M15 9v6M9 9v6" />
                                </svg>
                                Jewellery
                            </button>
                            <button
                            onClick={() => filterCategory('GiftSets')}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler shrink-0 size-4 icons-tabler-outline icon-tabler-gift"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" /><path d="M12 8l0 13" /><path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" /></svg>
                                GiftSets
                            </button>
                            <button
                            onClick={() => filterCategory('Traditional')}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            >
                                <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M15 9v6M9 9v6" />
                                </svg>
                                Traditional 
                            </button>
                            <button
                            onClick={() => filterCategory('CustomOrders')}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler shrink-0 size-4 icons-tabler-outline icon-tabler-adjustments"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M6 4v4" /><path d="M6 12v8" /><path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12 4v10" /><path d="M12 18v2" /><path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M18 4v1" /><path d="M18 9v11" /></svg>
                                CustomOrders
                            </button>
                            <button
                            onClick={() => filterCategory('Gardening')}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler shrink-0 size-4 icons-tabler-outline icon-tabler-plant"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" /><path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" /><path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" /><path d="M12 15l0 -6" /></svg>
                                 Gardening
                            </button>
                            <button
                            onClick={() => filterCategory('Kitchenware')}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler shrink-0 size-4 icons-tabler-outline icon-tabler-chef-hat"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" /><path d="M6.161 17.009l11.839 -.009" /></svg>
                                Kitchenware
                            </button>
                            <button
                            onClick={() => filterCategory('Decor')}
                                className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler shrink-0 size-4 icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                                 Decor
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[95rem] px-2 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* <div>
                    <h1 className='text-center text-5xl text-gray-800 font-bold'>Our Products</h1>
                </div> */}
                {/* Grid */}
                <div className="grid lg:grid-cols-3 mt-8 lg:gap-y-16 gap-10">
                    {displayProducts()}
                </div>
                
            </div>
        </>
    )
}

export default ListingItems;