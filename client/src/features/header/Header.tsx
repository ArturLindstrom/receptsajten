import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchRecipesThunk } from "../recipes/recipesSlice";
import { NavLink } from 'react-router-dom';


const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    `


const Header = () => {
    const dispatch = useDispatch();
    return (
    <StyledHeader>
        <NavLink to={'/'}>
        <h1>ReceptSajten</h1>
        </NavLink>
        <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Sök efter recept"  onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(fetchRecipesThunk(e.target.value))}/>
                <button type="submit">Sök</button>
            </form>
    </StyledHeader>
    )
}



export default Header;