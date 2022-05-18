// import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
import { fetchCategoriesThunk } from './categoriesSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.div`
position: sticky;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;
height: 100%;
grid-column: 1/2;
grid-row: 1/3;
`


function CategoriesNav2() {
 
  
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.categories.categories);
    const [showCategories, setShowCategories] = useState(false);

    useEffect(() => {
        dispatch(fetchCategoriesThunk());
    }, [dispatch]);

    return (
    <StyledNav>
      <Nav defaultActiveKey="/home" className="flex-column">
        <h1>Kategorier</h1>
        {categories.map((category: any) => <Nav.Link href={`/category/${category._id}`}> <p key={category._id}>{category._id} ({category.count})</p> </Nav.Link>)}

      </Nav>
    </StyledNav>
      
      );
    }
    
  export default CategoriesNav2;