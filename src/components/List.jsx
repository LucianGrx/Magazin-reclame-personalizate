import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";
import { AnimatePresence, motion } from "framer-motion";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const subCatsQuery = subCats.length
    ? subCats
        .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
        .join("")
    : "";
  const maxPriceQuery = maxPrice ? `&[filters][price][$lte]=${maxPrice}` : "";
  const sortQuery = sort ? `&[sort][price]=${sort}` : "";

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCatsQuery}${maxPriceQuery}${sortQuery}`
  );

  return (
    <div className="flex items-start gap-10 flex-wrap justify-center">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            loading
          </motion.div>
        ) : (
          data?.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card item={item} key={item.id} />
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default List;
