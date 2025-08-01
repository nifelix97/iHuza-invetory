import React, { createContext, useState } from 'react'
import { FiPackage, FiUsers } from "react-icons/fi";
import { GrPersonalComputer } from "react-icons/gr";
import { SlLayers } from "react-icons/sl";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "Laptops",
            icon: <FiPackage className="text-2xl" />
        },
        {
            id: 2,
            name: "Mobile",
            icon: <FiUsers className="text-2xl" />
        },
        {
            id: 3,
            name: "Tablets",
            icon: <GrPersonalComputer className="text-2xl" />
        },
        {
            id: 4,
            name: "Accessories",
            icon: <SlLayers className="text-2xl" />
        }
    ]);

    const addCategory = (category) => {
        setCategories(prev => [...prev, { ...category, id: Date.now() }]);
    };

    const removeCategory = (id) => {
        setCategories(prev => prev.filter(category => category.id !== id));
    };

    return (
        <CategoryContext.Provider value={{ categories, setCategories, addCategory, removeCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}