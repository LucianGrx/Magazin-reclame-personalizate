import React from "react";
import Card from "./Card";
;
import useFetch from "../hooks/useFetch";

const FeaturedProducts = ({ type }) => {

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );



  return (
    <div className="pt-5">
      <div className="w-full p-4 text-center sm:p-8 mt-24">
        <h1 className="mb-2 text-2xl sm:text-5xl font-bold text-gray-900 capitalize">
          {type}
        </h1>
      </div>
      <div className="flex items-start gap-10 flex-wrap justify-center">
      {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
