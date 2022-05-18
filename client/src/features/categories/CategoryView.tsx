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
    margin: 0 auto;
    padding: 2rem;
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
                <input type="text" placeholder={`Sök efter recept i kategorin ${category}`} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e.target.value)} />
                <button type="submit">Sök</button>
            </form>
            {recipes.map((recipe: RecipeType) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard> )}
        </StyledCategoryView>
    )
    }
    export default CategoryView;


