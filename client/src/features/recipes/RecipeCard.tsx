import styled from "styled-components";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { RecipeType } from "./recipeTypes";

interface RecipeCardProps {
    recipe: RecipeType;
}

const StyledRecipeCard = styled.div`
    width: 20rem;
    height: 28rem;
    margin: 1rem;
    /* border: 3px solid #356859; */
    border-radius: 0.5rem;
    background-color: #f1f5df;
    /* background-color: #c4bfbf; */
    /* background: #b9e4c9; */
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    text-align: left;

    & img {
        width: 50%;
        border-radius: 0.5rem;
        border: black solid 1px;
    }
    & h1 {
        text-align: center;
        font-weight: 700;
        font-size: 1.5rem;
        color: #fd5523;
    }
    & h2 {
        font-size: 1rem;
        color: #356859;
    }
    & a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        color: #356859;
    }
    & .ratings-number {
        text-align: center;
        font-size: 0.8rem;
    }
`;
const RecipeCard = ({ recipe }: RecipeCardProps) => {
    return (
        <StyledRecipeCard>
            <Link to={`/recipes/${recipe._id}`}>
                <img src={recipe.imageUrl} alt="receptbild" />
                <div>
                    <h1>{recipe.title}</h1>
                    {/* <p>{recipe.description}</p> */}
                </div>
            </Link>
            <div>
                <h2>
                    {recipe.ingredients.length} Ingredienser |{" "}
                    {recipe.timeinMins} Minuter
                </h2>
                <Stars
                    recipeRatings={recipe.ratings}
                    recipeId={recipe._id}
                    edit={false}
                />
                <p className="ratings-number">
                    {recipe.ratings.length} omdömen
                </p>
            </div>
            <Link to={`/recipes/${recipe._id}`}>
                <p>
                    {recipe.comments.length} kommentarer
                    <span className="material-symbols-outlined">comment</span>
                </p>
            </Link>
        </StyledRecipeCard>
    );
};

export default RecipeCard;
