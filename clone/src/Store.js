import React from "react";

const Store = (props) => {
  return (
    <div className="shop-box">
      <div className="shop-item">
        <img src={props.pdataObj.image} alt={props.pdataObj.name} />
        <h4>{props.pdataObj.name}</h4>
        <p>{props.pdataObj.description}</p>
        <a href="/">Learn More</a>
      </div>
    </div>
  );
};

export default Store;
