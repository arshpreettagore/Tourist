import React from "react";
import Tour from "./Tour";
const Tours = ({ dataInfoArray, removeFunction }) => {
  function deteleCardInfo(id) {
    const arrayAfterRemoval = dataInfoArray.filter(i => i.id!== id) 
    removeFunction(arrayAfterRemoval);
  }
  return (
    <>
      <main>
        <section>
          <div>{dataInfoArray.map((i) => {
            return <Tour key={i.id} dataInfo={i} deleteCard={deteleCardInfo}/>;
          })}</div>
        </section>
      </main>
    </>
  );
};

export default Tours;
