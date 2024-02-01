import React from "react";

const Store3 = (props) => {
  return (
    <div className="shop-box">
      <div className="shop-item">
        <img src={props.sdataObj.image} alt={props.sdataObj.name} />
        <h4>{props.sdataObj.name}</h4>
        <p>{props.sdataObj.description}</p>
        <a href="/">Learn More</a>
      </div>
    </div>
  );
};

export default Store3;
