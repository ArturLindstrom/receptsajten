import React from 'react';
import './App.css';
import { Outlet, NavLink } from 'react-router-dom';
import Header from './features/header/Header';
import CategoriesNav2 from './features/categories/CategoriesNav2';


const App = () => 
  <div className='App'>
    {/* <NavLink className='header' to="/"> */}
      <Header/>
    {/* </NavLink> */}
    {/* <CategoriesNav /> */}
    <CategoriesNav2 />
    <Outlet />
  </div>

export default App;
