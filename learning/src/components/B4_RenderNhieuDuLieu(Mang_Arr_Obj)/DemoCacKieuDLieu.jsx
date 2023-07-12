import React, { useState } from "react";

const DemoCacKieuDLieu = () => {
  // let [name, setName] = useState("Hoant");
  const [address, setAddress] = useState("");
  const [todo, setToDo] = useState([
    { id: "hoant", title: "Hoant dat dep 1" },
    { id: "hoant2", title: "Hoa nguyen cum dep 2" },
    { id: "hoan3", title: "Cười Hoho3" },
  ]);
  const handleOnchange = (event) => {
    setAddress(event.target.value);
    console.log(event.target.value);
  };
  const handleEventClick = () => {
    // hook khong merge state cũ đã thêm từ trước
    //có 3 ptu có sẵn khi bấm click sẽ mất 3 ptu đó và thêm state mới
    // Mở cmt 2 dòng bên dưới và chạy sẽ biết:))
    // let todo = { id: "hah", title: address };
    // setToDo([todo]);
    let newTodo = { id: "hah", title: address };
    setToDo([...todo, newTodo]);
  };
  return (
    <div>
      <div className="todo-container">
        {/* Lặp chạy theo số ptu todo ben tren*/}
        {todo.map((todo) => {
          return (
            //mỗi ptu cần thuộc tính key
            //giúp nâng cao hiệu năng để react biết cập nhật ptu nào
            <li className="todo-child" key={todo.id}>
              {todo.title}
            </li>
          );
        })}
      </div>
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

export default DemoCacKieuDLieu;
