import React, { useEffect } from "react";
import myContext from "../Components/ContextAPI/MyContext";
import Filter from "../Components/Filter/Filter";
import ProductItems from "../Components/ProductItems/ProductItems";
import Search from "../Components/Search/Search";
import "./Products.css";
const Products = () => {
  let productArr = React.useContext(myContext).state;
  let first = React.useContext(myContext).first;
  let setfirst = React.useContext(myContext).setFirst;

  let [loader, setLoader] = React.useState(false);
  let [data, setData] = React.useState([]);

  useEffect(() => {
    if (first) {
      setTimeout(() => {
        setLoader(true);
        setData(productArr);
      }, 1000);
      setTimeout(() => {
        setfirst(false);
      }, 2100);
    }
  }, [data]);

  return (
    <div id="main_box">
      {/* Search Component */}
      <Search fn={setData} />
      {/* Products and filter here */}
      <div id="main">
        <div id="filter">
          <Filter fn={setData} />
        </div>
        {loader ? (
          <div id="products">
            {data.map((el, i) => {
              return <ProductItems key={i} prop={el} />;
            })}
          </div>
        ) : (
          <div>
            <img
              src="https://i.pinimg.com/originals/c1/bc/d8/c1bcd8a8c945b53da6b29f10a2a553c0.gif"
              alt="loader"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
