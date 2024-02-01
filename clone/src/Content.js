import cdata from "./cdata";
import Store from "./Store2";

const Content = () => {
  return (
    <div className="content">
      <div className="headlines">
        <h1>CONTENT CREATION & STREAMING</h1>
        <h4>
          Producing quality content requires quality hardware. From
          high-fidelity webcams to professional-grade microphones, deliver the
          best possible streaming experience with our range of content creation
          gear. Whether you're streaming from your gaming desktop or laptop,
          weve got everything you need to create content that stands out from
          the rest.
        </h4>
      </div>
      <div className="shop">
        {cdata.map((item) => (
          <Store cdataObj={item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
