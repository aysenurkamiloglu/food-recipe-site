import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

import styled from "styled-components";
import style from "./Vegan.module.scss";

const Vegan = () => {
    const [vegan, setVegan] = useState([]);

    useEffect(() => {
        getVeganRecipes();
    }, []);

    const getVeganRecipes = async () => {

        const check = localStorage.getItem("vegan");

        if (check) {
            setVegan(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=vegan`);
            const data = await api.json();

            localStorage.setItem("vegan", JSON.stringify(data.recipes));
            setVegan(data.recipes);
            console.log(data.recipes);
        }
    }
    return (
        <div>
            <div className={style.vegan}>
                <h3> Vegan Foods </h3>
                <Splide options={{
                    perPage: 3,
                    drag: "free",
                    gap: "5rem",
                }}>
                    {vegan.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <div className={style.card}>
                                    <Link to={"/recipe/"+recipe.id}>
                                        <p className={style.card__title}>{recipe.title}</p>
                                        <img className={style.card__image} src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                    </Link>
                                </div>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </div>
        </div>
    )
}

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));

`;

export default Vegan;