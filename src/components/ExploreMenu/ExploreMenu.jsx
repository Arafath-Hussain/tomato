import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((element, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === element.menu_name ? "All" : element.menu_name
                )
              }
              key={index}
              className="explore-menu-list-element"
            >
              <img
                className={category === element.menu_name ? "active" : ""}
                src={element.menu_image}
                alt=""
              />
              <p>{element.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
