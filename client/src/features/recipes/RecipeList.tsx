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
    margin: 0 auto;
    padding: 2rem;
    width: 60%;
    `;

const RecipeList = () => {    
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(state => state.recipes.recipes);
    useEffect(() => {
        dispatch(fetchRecipesThunk())
    }, [dispatch]);

    return (
        <StyledRecipeList>
            {recipes.map((recipe: RecipeType) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}
            {/* <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Sök efter recept"  onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(fetchRecipesThunk(e.target.value))}/>
                <button type="submit">Sök</button>
            </form> */}

        </StyledRecipeList>
    )
    }
export default RecipeList;
