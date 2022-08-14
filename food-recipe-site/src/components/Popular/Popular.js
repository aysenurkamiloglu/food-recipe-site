import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import style from "./Popular.module.scss";
import styled from "styled-components";

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
        <div>
            <div className={style.popular}>
                <h3> Most Searched Foods </h3>
                <Splide options={{
                    perPage: 3,
                    drag: "free",
                    gap: "5rem",
                }}>
                    {popular.map((recipe) => {
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

export default Popular;