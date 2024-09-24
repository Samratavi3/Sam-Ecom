import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showsearch, setShowSearch] = useState(false);
  const [cartitems, setcartitems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartitems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setcartitems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartitems) {
      for (const item in cartitems[items]) {
        try {
          if (cartitems[items][item] > 0) {
            totalCount += cartitems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updataQunatity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartitems);
    cartData[itemId][size] = quantity;
    setcartitems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartitems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartitems[items]) {
        try {
          if (cartitems[items][item] > 0) {
            totalAmount += itemInfo.price * cartitems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showsearch,
    setShowSearch,
    cartitems,
    addToCart,
    getCartCount,
    updataQunatity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
