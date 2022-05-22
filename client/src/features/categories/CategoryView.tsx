import { useEffect } from "react";
import RecipeCard from "../recipes/RecipeCard";
import { useParams } from "react-router-dom";
import { fetchRecipesByCategoriesAndSearchThunk, fetchRecipesByCategoryThunk } from "../recipes/recipesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RecipeType } from "../recipes/recipeTypes";
import styled from "styled-components";


const StyledCategoryView = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    place-items: center center;
    margin: 0 auto;
    padding: 2rem;
    & input {
        border: 2px black solid;
        border-radius: 0.5rem;
        padding: 0.5rem;
        margin: 0.5rem;
    }
    & h2 {
        margin: 0
    }
    `



const CategoryView = () => {
    const { category } = useParams();
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(state => state.recipes.recipes);
    let onInputChange = (query: string) => {
        const payload = {
            category: category,
            query: query
        }
        dispatch(fetchRecipesByCategoriesAndSearchThunk(payload))
    }
    
    useEffect(() => {
        dispatch(fetchRecipesByCategoryThunk(category));
    }, [dispatch, category]);
    return (
        <StyledCategoryView className="category-view">
            <h2>{category}</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder={`Sök efter recept i ${category}`} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value)} />
            </form>
            {recipes.map((recipe: RecipeType) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}
        </StyledCategoryView>
    )
    }
    export default CategoryView;


