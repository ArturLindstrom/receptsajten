import { useEffect } from "react";
import RecipeCard from "../recipes/RecipeCard";
import { useParams } from "react-router-dom";
import {
    fetchRecipesByCategoriesAndSearchThunk,
    fetchRecipesByCategoryThunk,
} from "../recipes/recipesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RecipeType } from "../recipes/recipeTypes";
import styled from "styled-components";

const StyledCategoryView = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 5rem 7fr;
    place-items: top;
    gap: 2rem;
    min-height: 100vh;
    margin: 0 auto;
    padding: 2rem;
    grid-column: 2/3;
    & input {
        border: 2px black solid;
        border-radius: 0.5rem;
        padding: 0.5rem;
        margin: 0.5rem;
        grid-row: 1/2;
    }
    & form {
        place-self: center;
        grid-row: 1/2;
    }

    & .empty-list {
      grid-column: 1/3;
      /* grid-row: 1/2; */
      
    }
    & .header{
        font-size: 2rem;
        color: #f1f5df;
        grid-row: 1/2;
    }

    
`;

const CategoryView = () => {
    const { category } = useParams();
    const dispatch = useAppDispatch();
    const recipes = useAppSelector((state) => state.recipes.recipes);
    let onInputChange = (query: string) => {
        const payload = {
            category: category,
            query: query,
        };
        dispatch(fetchRecipesByCategoriesAndSearchThunk(payload));
    };

    useEffect(() => {
        dispatch(fetchRecipesByCategoryThunk(category));
    }, [dispatch, category]);
    return (
        <StyledCategoryView className="category-view">
                    <h1 className="header">{category}</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder={`Sök recept i ${category}`}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                              onInputChange(e.target.value)
                            }
                            />
                    </form>
                {!recipes.length && <h2 className="empty-list">Inga recept matchade din sökning!</h2>}
                {recipes.map((recipe: RecipeType) => (
                    <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>
                ))}
        </StyledCategoryView>
    );
};
export default CategoryView;
