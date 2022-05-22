import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchRecipesThunk } from "../../features/recipes/recipesSlice";
import RecipeCard from "./RecipeCard";
import { RecipeType } from "./recipeTypes";
import styled from "styled-components";

const StyledRecipeList = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem; 
    place-items: center center;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center; */
    margin: 0 auto;
    padding: 2rem;
    grid-column: 2/3;
    background: #b9e4c9;
    /* width: 60%; */
    & h1 {
        grid-column: 1/3;
    }
    `

const RecipeList = () => {    
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(state => state.recipes.recipes);
    useEffect(() => {
        dispatch(fetchRecipesThunk())
    }, [dispatch]);

    return (
        <StyledRecipeList>
             {recipes.map((recipe: RecipeType) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )} 
          

             {!recipes.length && <h1>Inga recept matchade din sökning!</h1>}
        </StyledRecipeList>
    )
    }
export default RecipeList;
