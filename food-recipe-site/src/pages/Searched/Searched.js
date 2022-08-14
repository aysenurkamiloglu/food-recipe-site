import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Searched.module.scss";

const Searched = () => {

    const [searchFoods, setSearchedFoods] = useState([]);
    let params = useParams();

    const getSearched = async (input) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${input}`);
        const recipes = await data.json();
        setSearchedFoods(recipes.results);
    }

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return(
        <div className={style.searched}>
            {searchFoods.map((item) => {
                return(
                    <div className={style.card} key={item.id}>
                        <Link className={style.card__link} to={"/recipe/"+item.id}>
                        <img className={style.card__image} src={item.image} alt="" />
                        <h4 className={style.card__title}>{item.title}</h4>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Searched;