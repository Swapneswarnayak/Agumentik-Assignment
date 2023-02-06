import React from "react";
import myContext from "../ContextAPI/MyContext";
import "./Filter.css";
const Filter = ({ fn }) => {
  let data = React.useContext(myContext).state;
  let setfirst = React.useContext(myContext).setFirst;

  let localData = [...data];


//   suffling Array for mixed Filtering

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }


// handling all sorting
  const handleColorChange = (args) => {
    console.log(args);

    let a;
    let sortType;
    if (args == "type") {
      a = document.getElementsByClassName("type");
      sortType = "type";
    }
    if (args == "gender") {
      a = document.getElementsByClassName("gender");
      sortType = "gender";
    }
    if (args == "color") {
      a = document.getElementsByClassName("color");
      sortType = "color";
    }
    let arr = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i].checked) {
        arr.push(a[i].name);
      }
    }
    console.log(arr);
    if (arr) {
      let finalArr = [];
      for (let j = 0; j < arr.length; j++) {
        localData = [...data];
        let filteredArr = localData.filter((el) => {
          return el[sortType] == arr[j];
        });
        finalArr = [...finalArr, ...filteredArr];
      }

      fn(shuffleArray(finalArr));
    }
    if (arr.length == 0) {
      fn(data);
    }
  };


//   handling price sorting

  const handlePriceChange = () => {
    let a = document.getElementsByClassName("price");
    let arr = [];
    for (let i = a.length - 1; i >= 0; i--) {
      if (a[i].checked) {
        arr.push(a[i].name);
      }
    }
    if (arr) {
      let finalArr = [];
      for (let j = 0; j < arr.length; j++) {
        localData = [...data];
        let filteredArr = localData.filter((el) => {
          console.log(el.price <= +arr[j]);

          return el.price <= Number(arr[j]);
        });
        finalArr = [...finalArr, ...filteredArr];
      }

      fn(shuffleArray(finalArr));
    }
    if (arr.length == 0) {
      fn(data);
    }
  };
  return (
    <div>
      <h4>Colour</h4>
      <div id="colour">
        <input
          type="checkbox"
          onChange={() => {
            handleColorChange("color");
          }}
          className="color"
          name="Red"
          id=""
          value={"red"}
        />
        &nbsp;
        <p>Red</p>
        <br />
        <input
          type="checkbox"
          onChange={() => {
            handleColorChange("color");
          }}
          className="color"
          name="Blue"
          id=""
          value={"blue"}
        />
        &nbsp;
        <p>Blue</p>
        <br />
        <input
          type="checkbox"
          onChange={() => {
            handleColorChange("color");
          }}
          className="color"
          name="Green"
          id=""
          value={"green"}
        />
        &nbsp;
        <p>Green</p>
      </div>
      <h4>Gender</h4>
      <div id="gender">
        <input
          type="checkbox"
          onChange={() => {
            handleColorChange("gender");
          }}
          className="gender"
          name="Men"
          id=""
        />
        &nbsp;
        <p>Men</p>
        <br />
        <input
          type="checkbox"
          onChange={() => {
            handleColorChange("gender");
          }}
          className="gender"
          name="Women"
          id=""
        />
        &nbsp;
        <p>Women</p>
      </div>
      <h4>Price</h4>
      <div id="price">
        <input
          type="checkbox"
          className="price"
          onChange={handlePriceChange}
          name="250"
          id=""
        />
        &nbsp;
        <p>0 - Rs250</p>
        <br />
        <input
          type="checkbox"
          className="price"
          onChange={handlePriceChange}
          name="450"
          id=""
        />
        &nbsp;
        <p>Rs251 - 450</p>
        <br />
        <input
          type="checkbox"
          className="price"
          onChange={handlePriceChange}
          name="500"
          id=""
        />
        &nbsp;
        <p>Rs500</p>
      </div>
      <h4>Type</h4>
      <div id="type">
        <input
          type="checkbox"
          className="type"
          onChange={() => {
            handleColorChange("type");
          }}
          name="Polo"
          id=""
        />
        &nbsp;
        <p>Polo</p>
        <br />
        <input
          type="checkbox"
          className="type"
          onChange={() => {
            handleColorChange("type");
          }}
          name="Hoodie"
          id=""
        />
        &nbsp;
        <p>Hoodie</p>
        <br />
        <input
          type="checkbox"
          className="type"
          onChange={() => {
            handleColorChange("type");
          }}
          name="Basic"
          id=""
        />
        &nbsp;
        <p>Basic</p>
      </div>
    </div>
  );
};

export default Filter;
