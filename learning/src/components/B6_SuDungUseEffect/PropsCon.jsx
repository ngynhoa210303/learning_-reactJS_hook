import React, { useState, useEffect } from "react";
import PropsDemo from "./PropsDemo";
const PropsCon = () => {
  const [address, setAddress] = useState("");
  const [todo, setToDo] = useState([
    { id: "hoant", title: "Hoant dat dep 1", type: "L1" },
    { id: "hoant2", title: "Hoa nguyen cum dep 2", type: "L2" },
    { id: "hoan3", title: "Cười Hoho3", type: "L1" },
    { id: "hoan4", title: "Cười Hoho4", type: "L2" },
  ]);
  const handleOnchange = (event) => {
    setAddress(event.target.value);
    console.log(event.target.value);
  };
  //add
  const handleEventClick = () => {
    let newTodo = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: address,
      type: "L1",
    };
    setToDo([...todo, newTodo]);
  };
  //delete
  const handleEventDelete = (id) => {
    let currentTodo = todo;
    currentTodo = currentTodo.filter((item) => item.id !== id);
    setToDo(currentTodo);
  };
  // sau khi chạy render lần đầu thì ctrinh sẽ mặc định chạy hàm useEffective
  //didmount
  useEffect(() => {
    console.log(">>chạy chạy thôi");
  }, [todo]);
  return (
    <div>
      <PropsDemo
        haha={todo}
        title={"All hoa dất xinh dep"}
        deleteClick={handleEventDelete}
      />
      <input
        type="text"
        value={address}
        onChange={(event) => handleOnchange(event)}
      ></input>
      <button
        onClick={() => {
          handleEventClick();
        }}
      >
        Click hehe
      </button>
    </div>
  );
};

export default PropsCon;
