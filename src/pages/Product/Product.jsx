import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const [activeImg, setActiveImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (data) {
      setActiveImage(data?.attributes?.img?.data?.attributes?.url);
    }
  }, [data]);

  console.log("AICI SA TE UITI!", data?.attributes?.img?.data?.attributes?.url)

  return (
    <div className="max-w-7xl mx-auto p-8">
   {loading ? ("loading") :  (<><div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-start">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row gap-5 h-24">
          <img
            src={data?.attributes?.img?.data?.attributes?.url}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(data?.attributes?.img?.data?.attributes?.url)}
          />
          <img
            src={data?.attributes?.img2?.data?.attributes?.url}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(data?.attributes?.img2?.data?.attributes?.url)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="text-purple-600 font-semibold">Special Product</span>
          <h1 className="text-3xl font-bold">{data?.attributes?.title}</h1>
        </div>
        <p className="text-gray-700">
          {data?.attributes?.desc}
        </p>
        <div className="flex gap-4"> 
        <h6 className="text-2xl font-semibold text-purple-600">{data?.attributes?.price} RON</h6>
        <h6 className="text-xl font-semibold text-gray-400 line-through">{data?.attributes?.oldPrice || data?.attributes?.price + 20} RON</h6>
        </div>
        <div className="flex flex-row items-center gap-12">
        <div className="flex flex-row items-center">
            <button className="bg-gray-200 py-2 px-5 rounded-lg text-purple-800 text-3xl" onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
            <span className="py-4 px-6 rounded-lg">{quantity}</span>
            <button className="bg-gray-200 py-2 px-5 rounded-lg text-purple-800 text-3xl" onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="bg-purple-800 text-white font-semibold py-3 px-16 rounded-xl h-full" onClick={()=>dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          desc:data.attributes.desc,
          img:data.attributes.img.data.attributes.url,
          price:data.attributes.price,
          quantity
        })) }>Add to cart</button>
      </div>
      </div>
    </div></>)}
    </div>
  );
}

export default Product;
