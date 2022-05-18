import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState, useEffect } from 'react';
import { fetchCategoriesThunk } from './categoriesSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';


function CategoriesNav2() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.categories.categories);
    const [showCategories, setShowCategories] = useState(false);

    useEffect(() => {
        dispatch(fetchCategoriesThunk());
    }, [dispatch]);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {categories.map((category: any) => <NavLink to={`/category/${category._id}`}> <p key={category._id}>{category._id} ({category.count})</p> </NavLink>)}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  export default CategoriesNav2;