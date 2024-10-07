'use client';
import useCartContext from '@/context/CartContext';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Rating } from 'react-simple-star-rating';
import StarRatings from 'react-star-ratings';

function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewList, setReviewList] = useState([]);
  const commentRef = useRef();

  const { addToCart, checkItemInCart } = useCartContext();

  const { id } = useParams();

  const fetchProductId = async () => {
    const res = await fetch('http://localhost:5000/product/getbyid/' + id);
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setProduct(data);
  };

  useEffect(() => {
    fetchProductId();
    fetchReview();
  }, []);

  const fetchReview = async () => {
    const res = await fetch('http://localhost:5000/review/getbyproduct/' + id);
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setReviewList(data);
  }

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1);
  };

  const handleRating = (rate) => {
    setRating(rate);
    console.log(`Rating given: ${rate}`);
  };

  const sendReview = () => {
    axios.post('http://localhost:5000/review/add', {
      product: id,
      images: [],
      comment: commentRef.current.value,
      rating: rating
    }, {
      headers: {
        'x-auth-token': localStorage.getItem('token')
      }
    })
      .then((result) => {
        toast.success('Review added successfully');
      }).catch((err) => {
        console.log(err);
        toast.error('Something went wrong');
      });
  }

  const showProductDetails = () => {
    if (product !== null) {
      return (
        <>
        <div className="max-w-6xl w-full flex h-[100vh] flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 h-[90vh] flex justify-center">
            <img
              src={product.image}
              alt="Handcrafted Clay Pot"
              className="w-full h-full rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <span className="text-2xl font-semibold text-red-900">₹{product.price}</span>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Features:</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>100% natural clay</li>
                <li>Handcrafted by local artisans</li>
                <li>Eco-friendly and sustainable</li>
                <li>Perfect for indoor and outdoor use</li>
                <li>Available in multiple sizes</li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Specifications:</h2>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <strong>Dimensions:</strong> 10 x 8 inches
                </li>
                <li>
                  <strong>Weight:</strong> 1.5 kg
                </li>
                <li>
                  <strong>Material:</strong> Natural clay
                </li>

              </ul>
            </div>
            <div className="mb-6">
              <label
                htmlFor="quantity"
                className="text-lg font-medium text-gray-800 mr-4"
              >
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-6 items-center ">

              <StarRatings
                onClick={handleRating}
                rating={rating}
                starRatedColor="red"
                starEmptyColor="gray"
                changeRating={setRating}
                numberOfStars={5}
                name='rating'
                starDimension="30px"

              />
              <textarea
                ref={commentRef}
                className="w-full p-2 mt-5 border border-gray-300 rounded-md"
                placeholder="Write your review here..."
              ></textarea>
              <button
                onClick={sendReview}
                className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit Review
              </button>

            </div>

            <button
              disabled={checkItemInCart(product)}
              onClick={() => {
                addToCart(product);
              }}
              className="w-full border md:w-auto px-6 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300 disabled:bg-white disabled:text-gray-400 disabled:border-gray-400"
            >
              {checkItemInCart(product) ? 'Item already in cart' : 'Add to Cart'}
            </button>

            {
              reviewList.length > 0 ? (

                reviewList.map(review => (
                  <div key={review._id}>
                    <div className="bg-white  shadow-md rounded-lg p-6 mb-4 transition duration-300 ease-in-out hover:shadow-lg">
                      {/* User Name and Date */}
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800">{review.user.name}</h2>
                        <p className="text-sm text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</p>
                      </div>

                      {/* Rating Section */}
                      <div className="flex items-center mb-4">
                        <StarRatings
                          readOnly
                          rating={review.rating}
                          starRatedColor="red"
                          starEmptyColor="gray"
                          numberOfStars={5}
                          starDimension="20px"
                        />
                      </div>

                      {/* Comment Section */}
                      <p className="text-gray-700 text-lg italic">"{review.comment}"</p>
                    </div>
                  </div>

                ))

              ) : (
                <h2 className="text-xl text-gray-800 mb-4">No reviews found yet.</h2>
              )
            }
          </div>
          
        </div>
        
        </>
      );
    } else {
      return <h2>Loading ... </h2>;
    }
  };

  return (
    <div className="bg-white min-h-screen mt-10 flex h-[100vh] items-center justify-center p-6">
      {showProductDetails()}
    </div>
  );
}

export default ProductPage;
