import React from "react";

const Btn = (event) => {
  const handleEventClick = () => {
    // eslint-disable-next-line no-restricted-globals
    console.log(">>lêuleu", event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value="oant"
        onClick={(event) => {
          handleEventClick(event);
        }}
      />
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

export default Btn;
