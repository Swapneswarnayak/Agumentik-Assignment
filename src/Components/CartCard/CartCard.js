import React, { useEffect } from "react";
import myContext from "../ContextAPI/MyContext";
import "./CartCard.css";
const CartCard = ({ prop }) => {
  let cart = React.useContext(myContext).cart;
  let setcart = React.useContext(myContext).setCart;

  useEffect(() => {}, [cart]);
  let obj = [];
  cart.forEach((el) => {
    if (obj[el.id] == undefined) {
      obj[el.id] = 1;
    } else {
      let x = obj[el.id];
      ++x;
      obj[el.id] = x;
    }
  });
  
// handling delete on cart page
  const handleDelete = (a) => {
    let arr = [...cart];
    let newArr = arr.filter((el) => {
      return el.id != a;
    });
    setcart(newArr);
  };

  return (
    <div id="cart_card">
      <img src={prop.imageURL} alt="product_image" />
      <div>
        <p>{prop.name}</p>
        <p>Rs.{prop.price}</p>
      </div>

      <button>Qty:{obj[prop.id]}</button>
      <button
        onClick={() => {
          handleDelete(prop.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default CartCard;
