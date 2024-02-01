import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Rewards from "./Rewards";
import Peripherals from "./peripherals";
import Setup from "./Setup";
import Content from "./Content";
import Software from "./Software";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Rewards />
      <Peripherals />
      <Setup />
      <Content />
      <Software />
      <Footer />
    </div>
  );
}

export default App;
