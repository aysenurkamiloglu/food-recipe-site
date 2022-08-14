import Categories from "./components/Categories/Categories";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import SearchBox from "./components/SearchBox/SearchBox";
import { Link } from "react-router-dom";
import { GiChefToque } from "react-icons/gi";
import style from "./App.module.scss";


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className={style.header}>
          <GiChefToque className={style.logo}/>
          <Link className={style.logo} to={"/"}>yummy</Link>
        </div>
        <SearchBox></SearchBox>
        <Categories></Categories>
        <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}

export default App;
