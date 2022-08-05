import { useEffect, useState } from "react";
import style from "./Popular.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';


const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        const check = localStorage.getItem("popular");

        if (check) {
            setPopular(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`);
            const data = await api.json();

            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    }
    return (
        <div className={style.popular}>
            <h3>Most Searched Recipes</h3>
            <Splide options={{
                perPage: 2,
            }}>
                {popular.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <div>
                                <p className={style.popular__header}>{recipe.title}</p>
                                <img className={style.popular__image} src={recipe.image} alt={recipe.title}></img>
                            </div>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

export default Popular;