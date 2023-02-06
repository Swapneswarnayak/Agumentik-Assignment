import React from "react";
import { Link } from "react-router-dom";
import myContext from "../ContextAPI/MyContext";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let cart = React.useContext(myContext).cart;
  let setfirst = React.useContext(myContext).setFirst;
  let navigate = useNavigate();
  const cartToHandle = () => {
    setfirst(true);
  };

  const goHome = () => {
    navigate("/");
  };
  return (
    <div id="nav">
      <div onClick={goHome} id="logo_store">
        <p>𝙏𝙚𝙚𝙍𝙚𝙭 𝙎𝙩𝙤𝙧𝙚 🧸</p>{" "}
      </div>

      <div id="right_bar">
        <Link to="/">
          {" "}
          <p>Products</p>
        </Link>
        <Link onClick={cartToHandle} to="/cart">
          {" "}
          <div id="img_area">
            <img
              src="https://www.pngitem.com/pimgs/m/521-5216062_shopping-cart-transparent-background-shopping-cart-icon-png.png"
              alt="cart_image"
            />
            <p>
              <b>{cart.length}</b>{" "}
              {/* No of products in cart will be shown here */}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
