import React, { useEffect } from "react";
import CartCard from "../Components/CartCard/CartCard";
import myContext from "../Components/ContextAPI/MyContext";
import "./Cart.css";
const Cart = () => {
  let cart = React.useContext(myContext).cart;
  console.log(cart);
  let [state, setState] = React.useState([]);
  let [total, setTotal] = React.useState(0);

  useEffect(() => {
    assignState();
  }, [cart]);
  let obj = [];
  let newArr = [];

  const assignState = () => {
    cart.forEach((el) => {
      if (obj[el.id] == undefined) {
        obj[el.id] = 1;
        newArr.push(el);
      } else {
        let x = obj[el.id];
        ++x;
        obj[el.id] = x;
      }
    });
    let total = cart.reduce((total, el) => {
      return total + el.price;
    }, 0);
    setTotal(total);

    setState(newArr);
    console.log(obj);
  };

  return (
    <div id="cart">
      <h1>Cart</h1>

      {state.map((el, i) => {
        return <CartCard key={i} prop={el} obj={obj} />;
      })}
      <br />
      <hr />
      <h2>Total Amount: Rs.{total}</h2>
    </div>
  );
};

export default Cart;
