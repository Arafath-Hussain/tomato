import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cardItems, setCardItem] = useState({});
  const addToCart = (itemId) => {
    if (!cardItems[itemId]) {
      setCardItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

 const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cardItems) {
    const quantity = cardItems[item];
    if (quantity > 0) {
      const itemInfo = food_list.find(product => product._id === item);
      if (itemInfo) {
        totalAmount += itemInfo.price * quantity;
      }
    }
  }
  return totalAmount;
};


  const contextValue = {
    food_list,
    cardItems,
    setCardItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
