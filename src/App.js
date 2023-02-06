import "./App.css";
import Allroutes from "./Routes/Allroutes";
import React from "react";
import myContext from "./Components/ContextAPI/MyContext";
import { useEffect } from "react";
function App() {
  let [state, setState] = React.useState([]);
  let [first, setFirst] = React.useState(true);
  let [cart, setCart] = React.useState([]);

  // use-effect to fetch data from API
  useEffect(() => {
    getData();
  }, []);

  // fetching data from API

  const getData = async () => {
    let res = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    let data = await res.json();
    setState(data);
    return data;
  };

  return (
    <div className="App">
      <myContext.Provider
        value={{
          state,
          setState,
          getData,
          first,
          setFirst,
          cart,
          setCart,
        }}
      >
        <Allroutes />
      </myContext.Provider>
    </div>
  );
}

export default App;
