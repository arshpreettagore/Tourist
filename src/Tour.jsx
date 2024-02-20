import React, { useState } from "react";

const Tour = ({dataInfo, deleteCard}) => {
  return (
    <>
      <article className="single-tour">
        <img src={dataInfo.image} />
        <footer>
          <div className="tour-info">
            <h1>{dataInfo.name} </h1>
            <h4 className="tour-price">${dataInfo.price}</h4>
          </div>
          <p>
            {dataInfo.info}
          </p>
          <button className="delete-btn" onClick={() => deleteCard(dataInfo.id)}>Not interested</button>
        </footer>
      </article>
    </> 
  );
};

export default Tour;
