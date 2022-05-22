import Nav from "react-bootstrap/Nav";
import { useEffect } from "react";
import { fetchCategoriesThunk } from "./categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const StyledNav = styled.div`
    position: sticky;
    background: #b9e4c9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    grid-column: 1/2;
    grid-row: 2/4;
    /* padding: 1rem; */
    & h1 {
        color: #fd5523;
        margin: 1rem;
    }
    & a {
        text-decoration: none;
        font-size: 1rem;
        color: #356859
        /* margin: 1rem; */
    }
`;

function CategoriesNav2() {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.categories.categories);

    useEffect(() => {
        dispatch(fetchCategoriesThunk());
    }, [dispatch]);

    return (
        <StyledNav>
            <Nav defaultActiveKey="/home" className="flex-column">
                <h1>Kategorier</h1>
                {categories.map((category: any) => (
                    <NavLink
                        key={category.name}
                        to={`/category/${category.name}`}
                    >
                        {" "}
                        <p>
                            {category.name} ({category.count})
                        </p>{" "}
                    </NavLink>
                ))}
            </Nav>
        </StyledNav>
    );
}

export default CategoriesNav2;
