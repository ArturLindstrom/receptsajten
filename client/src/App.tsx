import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./features/header/Header";
import CategoriesNav2 from "./features/categories/CategoriesNav2";

const App = () => (
    <div className="App">
        <Header />
        <CategoriesNav2 />
        <Outlet />
    </div>
);

export default App;
