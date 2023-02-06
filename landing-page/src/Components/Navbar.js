import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import { PhoneIcon, AddIcon, WarningIcon, Search2Icon } from "@chakra-ui/icons";
import { Icon, createIcon } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <div id="nav">
      <div id="logo">
        <img src="./Assets/d2509eebac3e464b901634531f8ab42b.png" alt="LOGO" />
      </div>
      <div id="main_nav">
        <Link to="/">DISCOVER</Link>
        <Link to="/">GALLERY</Link>
        <Link to="/">ACTIVITY</Link>
        <Link to="/">MARKETPLACE</Link>
      </div>
      <div id="shop">
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};

export default Navbar;
