import React from 'react';

function PhotoCard({ url, id }) {
  return (
    <div className="relative">
      <img
        className="w-50 h-50 rounded-lg"
        src={url}
        alt=""
      />
      <h1
        className="absolute bottom-0 text-[17px] w-[40px] min-w-fit p-2 bg-white rounded-tr-lg rounded-br-lg text-center"> {id}
      </h1>
    </div>
  );
}

export default PhotoCard;
