import React from "react";

const PropsDemo = ({ haha, title, deleteClick }) => {
  //truyền dữ liệu từ cha-> con parent-> child , top->bottom
  // khong thể truyền từ con sang cha
  //Khai báo props
  //haha là ten gọi của todo bên Props con có thể đặt ntn cũng được nhưng sang PropsDemo phải đặt giống hệt PropsCon thì mới chạy đc
  //C1:
  //   const todo = props.haha;
  //   const title = props.title;
  // C2:
  //   const { haha, title } = props;
  //C3 truyền trực tiếp trên props đầu tiên như trên
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
