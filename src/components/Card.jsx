import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  // const imgUrl = import.meta.env.VITE_REACT_APP_UPLOAD_URL;


  return (
    <Link 
      className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 mb-12"
      to={`/product/${item.id}`}
    >
      <div className="card w-56 md:w-72 flex flex-col gap-2">
        <div className="image h-72 md:h-96 relative overflow-hidden group">
          <img
            src={item.attributes?.img?.data?.attributes?.url}
            alt=""
            className="mainImg w-full h-full absolute top-0 left-0 object-cover z-1 opacity-100 transition-opacity duration-300 hover:opacity-0 group-hover:opacity-0"
          />
          {item?.attributes.isNew && (
            <span className="p-1 rounded-sm text-xs md:text-sm font-medium bg-white absolute top-2 left-2 ">
              {/* Economisiți x% */}
            </span>
          )}
          <img
            src={item.attributes?.img2?.data?.attributes?.url}
            alt=""
            className="secondImg w-full h-full absolute top-0 left-0 object-cover z-0 opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-100"
          />
        </div>
        <h2 className="text-center text-sm md:text-base font-medium">
          {item?.attributes.title}
        </h2>
        <div className="prices flex justify-center gap-4">
          <h3 className="text-purple-600 text-sm md:text-base font-medium">
            {item?.attributes.price} RON
          </h3>
          <h3 className="text-gray-400 text-sm md:text-base font-medium line-through">
            {item?.attributes.oldPrice || item?.attributes.price + 20} RON
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
