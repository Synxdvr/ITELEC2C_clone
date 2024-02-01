import sdata from "./sdata";
import Store from "./Store3";

const Software = () => {
  return (
    <div className="software">
      <div className="headlines">
        <h1>SOFTWARE</h1>
        <h4>
          From customizing keybinds and Chroma effects to optimizing audio and
          game performance, Razer's software platforms are designed to enhance
          your gaming and productivity. Seamlessly integrated with our extensive
          collection of gamer accessories and PC peripherals, get the most out
          of our devices and create a single ecosystem for your gaming or office
          desktop.
        </h4>
      </div>
      <div className="shop">
        {sdata.map((item) => (
          <Store sdataObj={item} />
        ))}
      </div>
      <div className="extras">
        {/* {xdata.map((item) => (
          <Extra xdataObj={item} />
        ))} */}
      </div>
    </div>
  );
};

export default Software;
