import logo from "./logo.svg";
import "./App.css";
// import B1 from "./components/B1_RenderDuLieuCuaBien/B1";
import Nav from "./components/B2_SuDungNhieuComponentTrenCung1MH/Nav";
// import Btn from "./components/B2_SuDungNhieuComponentTrenCung1MH/Btn";
// import UseStateDemo from "./components/B3_SuDungUseState/UseStateDemo";
// import DemoCacKieuDLieu from "./components/B4_RenderNhieuDuLieu(Mang_Arr_Obj)/DemoCacKieuDLieu";
import PropsCon from "./components/B5_Props_CDList/PropsCon";

const App = () => {
  return (
    <div className="App">
      {" "}
      <header className="App-header">
        {/* <B1 /> */}
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />

        {/* 2. B2 */}
        {/* <Btn /> */}
        {/* 3. B3 */}
        {/* <UseStateDemo /> */}
        {/* 4. B4: useState với nhiều kiểu dữ liệu */}
        {/* <DemoCacKieuDLieu /> */}
        {/* 5. B5: props quan hệ cha-con */}
        <PropsCon />
      </header>
    </div>
  );
};

export default App;
