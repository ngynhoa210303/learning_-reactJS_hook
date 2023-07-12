import logo from "./logo.svg";
import "./App.css";
// import B1 from "./components/B1_RenderDuLieuCuaBien/B1";
import Nav from "./components/B2_SuDungNhieuComponentTrenCung1MH/Nav";
// import Btn from "./components/B2_SuDungNhieuComponentTrenCung1MH/Btn";
import UseStateDemo from "./components/B3_SuDungUseState/UseStateDemo";

const App = () => {
  return (
    <div className="App">
      {" "}
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <B1 /> */}
        {/* 2. B2 */}
        {/* <Btn /> */}
        {/* 3. B3 */}
        <UseStateDemo />
      </header>
    </div>
  );
};

export default App;
