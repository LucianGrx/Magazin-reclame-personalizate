import React, { useState } from "react";
import List from "../../components/List";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [maxPriceTemp, setMaxPriceTemp] = useState(10000);

  const handleMaxPriceChange = (e) => {
    setMaxPriceTemp(e.target.value);
  };

  const handleMaxPriceChangeEnd = () => {
    setMaxPrice(maxPriceTemp);
  };

  const [sort, setSort] = useState(null);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
      <div className="mb-10 px-4 sm:px-6 lg:px-8 mt-10">
        <h6 className="text-sm mb-2">
          <Link className="text-slate-500 hover:text-black" to="/">
            Acasa{" "}
          </Link>
          / Produse
        </h6>
        <div>
        <div className="p-4">

            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="text-black hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              Afisati filtrele
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="z-10 mb-10 md:w-1/4 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
              >
                <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </h6>
                <ul
                  className="space-y-2 text-sm"
                  aria-labelledby="dropdownDefault"
                >
                  {data?.map((item) => (
                    <li className="flex items-center" key={item.id}>
                      <input
                        id={item.id}
                        type="checkbox"
                        value={item.id}
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor={item.id}
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        {item.attributes.title}
                      </label>
                    </li>
                  ))}
                </ul>
                <h6 className="mb-3 mt-6 text-sm font-medium text-gray-900 dark:text-white">
                  Filter by price
                </h6>
                <div className="inputItem flex items-center">
                  <span className="text-white">20</span>
                  <input
                    type="range"
                    min={20}
                    max={10000}
                    value={maxPriceTemp}
                    onChange={handleMaxPriceChange}
                    onMouseUp={handleMaxPriceChangeEnd}
                    onTouchEnd={handleMaxPriceChangeEnd}
                    className="mx-3"
                  />
                  <span className="text-white">{maxPriceTemp}</span>
                </div>
                <h6 className="mb-3 mt-6 text-sm font-medium text-gray-900 dark:text-white">
                  Sort by
                </h6>
                <div className="inputItem flex items-center">
                  <input
                    type="radio"
                    id="asc"
                    value="asc"
                    name="price"
                    onChange={(e) => setSort("asc")}
                    className="w-4 h-4"
                  />
                  <label
                    htmlFor="asc"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Price (Lower first)
                  </label>
                </div>
                <div className="inputItem flex items-center">
                  <input
                    type="radio"
                    id="desc"
                    value="desc"
                    name="price"
                    onChange={(e) => setSort("desc")}
                    className="w-4 h-4"
                  />
                  <label
                    htmlFor="desc"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Price (Highest first)
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="">
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      </div>
  );
};

export default Products;
