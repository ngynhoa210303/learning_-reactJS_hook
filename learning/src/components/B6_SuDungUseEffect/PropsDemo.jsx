import React from "react";

const PropsDemo = ({ haha, title, deleteClick }) => {
  return (
    <div>
      <div className="todo-container">
        <div className="title">{title}</div>
        {haha.map((todo) => {
          return (
            <li className="todo-child" key={todo.id}>
              {todo.title}
              <span
                onClick={() => deleteClick(todo.id)}
                style={{ cursor: "pointer" }}
              >
                &nbsp; x
              </span>
            </li>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default PropsDemo;
