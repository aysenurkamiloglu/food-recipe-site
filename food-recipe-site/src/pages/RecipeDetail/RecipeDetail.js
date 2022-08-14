import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./RecipeDetail.module.scss";
import styled from "styled-components";

const RecipeDetail = () => {

    let params = useParams();
    const [recipeDetails, setRecipeDetails] = useState({});
    const [active, setActive] = useState("instructions");

    const fetchRecipeDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.recipeName}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detail = await data.json();
        setRecipeDetails(detail);
    }

    useEffect(() => {
        fetchRecipeDetails();
    }, [params.recipeName]);

    return (
        <div className={style.detail}>
            <div>
                <h2 className={style.detail__title}>{recipeDetails.title}</h2>
                <img className={style.detail__image} src={recipeDetails.image} alt={recipeDetails.title} />
            </div>
            <div className={style.info}>
                <Button className={active === "instructions" ? "active" : ""} onClick={() => setActive("instructions")}>Instructions</Button>
                <Button className={active === "ingredients" ? "active" : ""} onClick={() => setActive("ingredients")}>Ingredients</Button>
                {active === "instructions" && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}></h3>
                    </div>
                )}
                {active === "ingredients" && (
                    <ul className={style.detail__ul}>
                        {recipeDetails.extendedIngredients?.map((ingredient) =>
                            <li key={ingredient.id} className={style.detail__list}>
                                {ingredient.original}
                            </li>)}
                    </ul>
                )}
            </div>
        </div>
    )
}

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

export default RecipeDetail;