import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Cuisine.module.scss";

const Cuisine = () => {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams()

    const getCuisines = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    }

    useEffect(() => {
        getCuisines(params.type)
        console.log(params.type);
    }, [params.type]);

    return (
        <motion.div className={style.motion} animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5}}>
            {cuisine?.map((item) => {
                return (
                    <div className={style.card} key={item.id}>
                        <Link className={style.card__link} to={"/recipe/"+item.id}>
                            <img className={style.card__image} src={item.image} alt={item.title}/>
                            <h4>{item.title}</h4>
                        </Link>
                    </div>
                )
            })}
        </motion.div>
    )
}

export default Cuisine;