import React from "react";
import myContext from "../ContextAPI/MyContext";
import Filter from "../Filter/Filter";
import "./Search.css";
const Search = ({ fn }) => {
  let arr = React.useRef([]);
  let data = React.useContext(myContext).state;
  let setfirst = React.useContext(myContext).setFirst;

  //   search functionality

  const handleChange = () => {
    setfirst(false);
    arr.current = [...data];
    let input = document.getElementById("input").value;
    if (input) {
      let newArrName = arr.current.filter((el) => {
        return el.name.toLowerCase().startsWith(input);
      });
      let newArrColor = arr.current.filter((el) => {
        return el.color.toLowerCase().startsWith(input);
      });
      let newArrType = arr.current.filter((el) => {
        return el.type.toLowerCase().startsWith(input);
      });
      let finalArr = [...newArrName, ...newArrColor, ...newArrType];

      fn(finalArr);
    } else {
      fn(data);
    }
  };

  const open_modal = () => {
    document.getElementById("modal").style.display = "block";
  };

  return (
    <>
      <div id="search">
        <input
          id="input"
          type="text"
          onChange={handleChange}
          placeholder="Search for products....."
        />
        <img
          src="https://i.pinimg.com/736x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg"
          alt="search_icon"
        />
        <img
          id="filter_icon"
          onClick={open_modal}
          src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/filter-512.png"
          alt="search_icon"
        />
      </div>
      <div id="modal">
        <div>
          <button
            onClick={(e) => {
              document.getElementById("modal").style.display = "none";
            }}
          >
            Close Filter
          </button>
          <Filter fn={fn} />
        </div>
      </div>
    </>
  );
};

export default Search;
