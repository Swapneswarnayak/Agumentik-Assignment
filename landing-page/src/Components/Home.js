import React from "react";
import "../Style/Home.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import BasicUsage from "./Modal";
const Home = () => {
  return (
    <div id="home">
      <img
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="home"
      />
      <div id="portal">
        <BasicUsage />
      </div>
    </div>
  );
};

export default Home;
