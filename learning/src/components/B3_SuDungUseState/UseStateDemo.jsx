import React, { useState } from "react";

const UseStateDemo = () => {
  let [name, setName] = useState("Hoant");
  const [address, setAddress] = useState("");
  const handleOnchange = (event) => {
    setAddress(event.target.value);
    console.log(event.target.value);
  };
  //name lấy ptu dau tien trong mang de tra va va setName se lay phan tu thu 2 de tra ve
  const handleEventClick = (event) => {
    // eslint-disable-next-line no-const-assign
    setName(address);
    console.log(">>lêuleu", name);
  };
  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        value={address}
        onChange={(event) => handleOnchange(event)}
      ></input>
      <button
        onClick={(event) => {
          handleEventClick(event);
        }}
      >
        Click hehe
      </button>
    </div>
  );
};

export default UseStateDemo;
