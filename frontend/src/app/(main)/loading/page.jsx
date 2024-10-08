// components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-40">
      <div className="  w-64 h-64  rounded-full" role="status">
<img className='h-full w-ful object-cover' src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif" alt="" />      </div>
    </div>
  );
};

export default Loading;
