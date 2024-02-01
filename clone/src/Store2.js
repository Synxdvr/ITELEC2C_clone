import React from "react";

const Store2 = (props) => {
  return (
    <div className="shop-box">
      <div className="shop-item">
        <img src={props.cdataObj.image} alt={props.cdataObj.name} />
        <h4>{props.cdataObj.name}</h4>
        <p>{props.cdataObj.description}</p>
        <a href="/">Learn More</a>
      </div>
    </div>
  );
};

export default Store2;
