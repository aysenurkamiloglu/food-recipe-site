import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchBox.module.scss";

const SearchBox = () => {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }

    return (
        <form className={style.search} onSubmit={submitHandler}>
            <FaSearch className={style.search__svg}></FaSearch>
            <input className={style.search__input} onChange={(e) => setInput(e.target.value)} type="text" value={input}></input>
        </form>
    )
}

export default SearchBox;