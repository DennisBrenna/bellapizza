import React, { useState } from "react";
import Footer from "../components/FooterCard";
import MenuCard from "../components/MenuCard";
import MenuButton from "../components/MenuButton";
import Header from "../components/Header";
import DividerHorizontal from "../components/DividerHorizontal";
import pizza from '../images/Pizza.png';
import soda from '../images/Soda.png';
import pasta from '../images/Pasta.png';


const products = [
    
    { 
    id: 1,
    title: "Vesuvio",
    description: "Cheese, Ham",
    image: pizza,
    dish: "Pizza",
    price: "$10"
    },

    { 
    id: 2,
    title: "Groggen",
    description: "Cheese, Ham",
    image: pizza,
    dish: "Pizza",
    price: "$10"
    },

    { 
    id: 3,
    title: "Mange SP",
    description: "Cheese, Ham",
    image: pizza,
    dish: "Pizza",
    price: "$10"
    },
    
    { 
    id: 19,
    title: "Fisk Pasta",
    description: "Cheese, Ham",
    image: pasta,
    dish: "Pasta",
    price: "$10"
    },

    { 
    id: 19,
    title: "Fisk Pasta",
    description: "Cheese, Ham",
    image: pasta,
    dish: "Pasta",
    price: "$10"
    },

    
];


function Menu() {

    const [filteredProducts, setFilteredProducts] = useState(products)

    return(
     
        <>
        <Header/>
        <MenuButton products={ products } setFilteredProducts={ setFilteredProducts }/>
        <MenuCard products={ filteredProducts }/>
        <DividerHorizontal/><br/><br/>
        <Footer/>
        </>
        
    );

}

export default Menu;