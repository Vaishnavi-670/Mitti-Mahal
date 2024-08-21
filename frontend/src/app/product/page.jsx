import React from 'react'

const Product = () => {
  return (
    <>
     <div className='flex justify-center items-center min-h-screen'>
     <section className="grid grid-cols-[0.9fr_1fr] mx-auto py-10 min-w-[750px] bg-white rounded-md">
        <div className="relative">
          <div className="absolute -left-10 grid grid-rows-1 w-full h-full rounded-md shadow-[4px_4px_25px_-2px_rgba(0,0,0,0.3)]">
            <div className="rounded-t-md bg-[#c4c7be] bg-gradient-radial from-[#d0d1cb] to-[#c4c7be]">
              <img
                src="https://i.pinimg.com/236x/9a/fb/75/9afb7581ea0b50307d7ec9e7876bc026.jpg"
                alt="green apple slice"
                className="absolute -left-14 top-8 max-w-[110%] filter saturate-150 contrast-120 hue-rotate-10 drop-shadow-[1px_20px_10px_rgba(0,0,0,0.3)]"
              />
            </div>
            <div className="p-3 rounded-b-md bg-white">
              <ul className="flex justify-around">
                <li className="float-left w-14 h-14 p-2 border border-gray-400 rounded-md">
                  <img
                    src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                    alt="green apple"
                  />
                </li>
                <li className="float-left w-14 h-14 p-2 border border-gray-400 rounded-md">
                  <img
                    src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png"
                    alt="half apple"
                  />
                </li>
                <li className="float-left w-14 h-14 p-2 border border-gray-400 rounded-md">
                  <img
                    src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png"
                    alt="green apple"
                  />
                </li>
                <li className="float-left w-14 h-14 p-2 border border-gray-400 rounded-md">
                  <img
                    src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
                    alt="apple top"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-3.5">
          <div className="mb-0.5">
            <h1 className="text-gray-700 text-2xl font-extrabold">Variable Product</h1>
            <span className="text-xs text-gray-400">COD: 45999</span>
          </div>
          <div className="my-6 text-[#ff3f40] text-xl">
            R$ <span className="pl-0.5 text-3xl">7.93</span>
          </div>
          <div className="overflow-auto">
            <h3 className="mb-4">SELECT A COLOR</h3>
            <ul>
              <li className="float-left w-9 h-9 p-0.5 border border-gray-400 rounded-md cursor-pointer">
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                  alt="green apple"
                />
              </li>
              <li className="float-left w-9 h-9 p-0.5 border border-transparent rounded-md cursor-pointer ml-0.5 hover:border-gray-400">
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png"
                  alt="yellow apple"
                />
              </li>
              <li className="float-left w-9 h-9 p-0.5 border border-transparent rounded-md cursor-pointer ml-0.5 hover:border-gray-400">
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png"
                  alt="orange apple"
                />
              </li>
              <li className="float-left w-9 h-9 p-0.5 border border-transparent rounded-md cursor-pointer ml-0.5 hover:border-gray-400">
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
                  alt="red apple"
                />
              </li>
            </ul>
          </div>
          <div className="clear-left my-8">
            {/* <h3 className="mb-4">BENEFITS</h3> */}
            <ul className="text-sm list-disc ml-4">
              <li className="text-indent-[-0.6em] mb-2">Apples are nutritious</li>
              <li className="text-indent-[-0.6em] mb-2">Apples may be good for weight loss</li>
              <li className="text-indent-[-0.6em] mb-2">Apples may be good for bone health</li>
              <li className="text-indent-[-0.6em] mb-2">They're linked to a lower risk of diabetes</li>
            </ul>
          </div>
          <button className="py-6 px-12 border-none rounded-md text-sm font-bold tracking-wide text-white bg-[#ff3f40] shadow-[2px_2px_25px_-7px_#4c4c4c] cursor-pointer active:scale-97">
            ADD TO CART
          </button>
        </div>
      </section>
     </div>

    </>
  )
}

export default Product;