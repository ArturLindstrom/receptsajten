import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./features/header/Header";
import CategoriesNav from "./features/categories/CategoriesNav";
const App = () => (
    <div className="App">
        <Header />
        <CategoriesNav />
        <Outlet />
    </div>
);

export default App;
