import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-element">
        {food_list.map((element, index) => {
          if ((category ==="All" || category === element.category)) {
            return (
              <FoodItem
                key={index}
                id={element._id}
                name={element.name}
                description={element.description}
                price={element.price}
                image={element.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
