import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchRecipesThunk } from "../recipes/recipesSlice";
import { NavLink, useLocation } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1/3;
    /* align-self: center;   */
    width: 100%;
    height: 30rem;
    margin: 0 auto;
    background: url("https://images.unsplash.com/photo-1568689595552-ae5eb971f704?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1522")
        no-repeat top;
    & h1 {
        font-size: 96px;
        color: #fff;
    }
    & a {
        text-decoration: none;
    }
    & input {
        border: 2px black solid;
        border-radius: 0.5rem;
        padding: 0.5rem;
        margin: 0.5rem;
    }
`;

const Header = () => {
    const dispatch = useDispatch();
    console.log(useLocation());
    return (
        <StyledHeader>
            <NavLink to={"/"}>
                <h1>ReceptSajten</h1>
            </NavLink>
            {useLocation().pathname === "/" ? (
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Sök efter recept"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            dispatch(fetchRecipesThunk(e.target.value))
                        }
                    />
                </form>
            ) : null}
        </StyledHeader>
    );
};

export default Header;
