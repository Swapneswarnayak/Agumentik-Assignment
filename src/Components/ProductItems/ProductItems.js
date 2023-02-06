import React, { useEffect } from "react";
import myContext from "../ContextAPI/MyContext";
import "./ProductItem.css";
const ProductItems = ({ prop }) => {
  let [state, setState] = React.useState(0);
  let [disable, setDisable] = React.useState(false);
  let data = React.useContext(myContext).state;
  let cart = React.useContext(myContext).cart;
  let setcart = React.useContext(myContext).setCart;

  useEffect(() => {
    assignState();
  }, [cart]);

  const assignState = () => {
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

    setState(obj[prop.id] || 0);
  };

  //  handling addition

  const handleUp = (id) => {
    console.log(id, state);
    let obj = data.find((el) => {
      return el.id == id;
    });

    if (state == obj.quantity) {
      setDisable(true);
      alert("reached the maximum Quantity");
    } else {
      setState((prev) => prev + 1);
      let newArr = [...cart, obj];
      setcart(newArr);
    }
  };

  //   handling minus

  const handleDown = (id) => {
    console.log(id);
    setDisable(false);
    let index = -1;
    cart.forEach((el, i) => {
      if (el.id == id) {
        index = i;
        return;
      }
    });
    console.log(index);
    cart.splice(index, 1);
    let newArr = [...cart];
    setcart(newArr);

    setState((prev) => prev - 1);
  };

  return (
    <div id="card">
      <img src={prop.imageURL} alt="items" />
      <hr />
      <p id="card_name">{prop.name}</p>
      <p style={{color:"white"}}>{prop.color}</p>

      <p>{prop.gender}</p>
      <div id="lower_card">
        <p>Rs {prop.price}</p>
        {console.log(prop.quantity)}
        {prop.quantity == 0 ? (
          <button id="soldout">Sold Out</button>
        ) : state < 1 ? (
          <button id="add_to_cart_btn" onClick={() => handleUp(prop.id)}>
            Add to Cart
          </button>
        ) : (
          <div id="quantity">
            <button
              onClick={() => {
                handleDown(prop.id);
              }}
              className="qnt_btn"
            >
              -
            </button>
            {state}
            <button
              disabled={disable}
              onClick={() => handleUp(prop.id)}
              className="qnt_btn"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItems;
