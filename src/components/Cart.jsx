import React, { useContext } from "react";
import {
  AiOutlineDelete,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartReducer";
import { makeRequest } from "../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import AuthContext from "./AuthContext";

const Cart = () => {

  const {userId} = useContext(AuthContext);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const totalProduct = (item) => {
    return item.quantity * item.price;
  };

  const stripePromise = loadStripe(
    "pk_test_51MrJDYL8VKq4usCcpOMluUHcm4DNTu2XYArRTHlU8GoOrvyPgVsKo1dAHN1oNk1zMJmkdoBX7vUrgcQyU8zdy7Iq00TCiEVTOW"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
        user: userId
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      className="cart absolute right-5 top-20 z-50 bg-white p-5 shadow-md"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
      >
        <h1 className="mb-8 text-gray-500 font-normal text-lg">
          Produsele din cos
        </h1>
        {products?.map((item) => (
          <div className="item flex items-center gap-5 mb-8" key={item.id}>
            <img
              className="w-20 h-24 object-cover"
              src={item?.img}
              alt=""
            />
            <div className="details">
              <div className="flex gap-5 mb-1">
                <h1 className=" font-normal text-sm">{item.title || item.name}</h1> {/* Modificare aici */}
                <p className="price text-sm">{totalProduct(item)} RON</p>
              </div>
  
              {/* Adaugă aceasta verificare pentru a afișa detaliile personalizate dacă produsul este personalizat */}
              {item.material && (
                <p className="material text-sm">Material: {item.material}</p>
              )}
             {item.primaryColor && (
  <p className="primaryColor text-sm">Culoare Primară: {item.primaryColor.name}, {item.primaryColor.color}</p>
)}
{item.secondaryColor && (
  <p className="secondaryColor text-sm">Culoare Secundară: {item.secondaryColor.name}, {item.secondaryColor.color}</p>
)}
  
              <span className="text-sm text-gray-500">Quantity </span>
              <div className="quantity flex items-center gap-1 mt-2">
                <button onClick={() => handleDecreaseQuantity(item.id)}>
                  <AiFillMinusCircle />
                </button>
                <p className="mx-3">{item.quantity}</p>
                <button onClick={() => handleIncreaseQuantity(item.id)}>
                  <AiFillPlusCircle />
                </button>
                <AiOutlineDelete
                  className="delete text-red-600 text-xl ml-4 cursor-pointer"
                  onClick={() => dispatch(removeItem(item.id))}
                />
              </div>
            </div>
          </div>
        ))}
  
        <div className="total flex justify-between font-medium text-base mb-5">
          <span>SUBTOTAL</span>
          <span>{totalPrice()}</span>
        </div>
        <button
          className="w-60 p-3 flex justify-center text-center gap-5 cursor-pointer bg-purple-700 font-medium mb-5 text-white"
          onClick={handlePayment}
        >
          PROCEED TO CHECKOUT
        </button>
        <span
          className="reset text-red-600 text-sm cursor-pointer"
          onClick={() => dispatch(resetCart())}
        >
          Reset Cart
        </span>
      </motion.div>
    </motion.div>
  );
  
};

export default Cart;
