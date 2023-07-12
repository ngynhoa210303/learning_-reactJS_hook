import React from "react";

const B1 = () => {
  let name = "Hoant";
  let obj = { age: 1 };
  return (
    <div>
      <h1>
        Hello hoho {name} tuoi {obj.age}
      </h1>
      {/* khong the in truc tiep obj nma in đc thuộc tính của nó */}
      {/* Nếu muốn in obj thì có thể convert  */}
      {JSON.stringify(obj)}
    </div>
  );
};

export default B1;
