import  { useContext, useState, useEffect } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);

  useEffect(() => {
    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || {};
    setIsFavorite(likedItems[id] || false);
  }, [id]);

  const handleHeartClick = () => {
    const updatedLikedItems = {
      ...JSON.parse(localStorage.getItem("likedItems")),
      [id]: !isFavorite,
    };
    localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="food-item">
      <div className="food-item-box">
        <img src={url+"/images/"+image} alt="" className="food-img" />
      </div>
      {cartItems[id] ? (
        <div className="bar">
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        </div>
      ) : (
        <img
          onClick={() => addToCart(id)}
          src={assets.add_icon_white}
          alt=""
          className="add food-item-counter"
        />
      )}
      <div className="food-info">
        <div className="rating">
          <p>{name}</p>
          <i
            onClick={handleHeartClick}
            className={`fas fa-heart heart ${isFavorite ? "red" : ""}`}
          ></i>
        </div>
        <p className="food-desc">{description}</p>
        <p className="food-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
