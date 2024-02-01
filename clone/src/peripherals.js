import React from "react";
import pdata from "./pdata";
import Store from "./Store";

const Peripherals = () => {
  return (
    <div className="peripherals">
      <div className="headlines">
        <h1>PC & LAPTOP PERIPHERALS</h1>
        <h4>
          The most powerful rigs mean nothing without the best gear to match.
          Gain a competitive edge with PC and laptop peripherals armed with our
          latest technology. From award-winning mice and keyboards to
          industry-leading headsets and monitors, deck out your setup with our
          comprehensive selection of peripherals for gaming and work.
        </h4>
      </div>
      <div className="shop">
        {pdata.map((item) => (
          <Store pdataObj={item} />
        ))}
      </div>
    </div>
  );
};

export default Peripherals;
