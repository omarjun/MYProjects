import React from 'react';

function Header() {
  return (
    <div className='mt-0 mb-0 mx-auto text-center'>
      <h1 className="mt-2 text-3xl font-bold">PicHub</h1>
      <input type="text" placeholder='Search an image' className="border border-gray-300 rounded-md px-4 py-2 mt-4 w-60%" />
    </div>
  );
}

export default Header;
