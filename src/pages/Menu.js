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
    title: "Capricciosa",
    description: "Cheese, Ham, Mushroom",
    image: pizza,
    dish: "Pizza",
    price: "$10"
    },

    { 
    id: 3,
    title: "Hawaii",
    description: "Cheese, Ham, Pineapple",
    image: pizza,
    dish: "Pizza",
    price: "$10"
    },
    
    { 
    id: 4,
    title: "Mexican",
    description: "Cheese, Meat Sauce, Onion, Jalapenios",
    image: pizza,
    dish: "Pizza",
    price: "$12"
    },

    { 
    id: 5,
    title: "Kebab Pizza",
    description: "Cheese, Kebab, Kebab Suace, Onion",
    image: pizza,
    dish: "Pizza",
    price: "$13"
    },

    { 
    id: 6,
    title: "Jason Special",
    description: "Cheese, Ham, Salami, Ruccola",
    image: pizza,
    dish: "Pizza",
    price: "$13"
    },

    { 
    id: 7,
    title: "Dallas Star",
    description: "Cheese, Ham, Outer File, Onion, Bearneise Sauce",
    image: pizza,
    dish: "Pizza",
    price: "$15"
    },

    { 
    id: 8,
    title: "New York Ranger",
    description: "Cheese, Spicy Salami, Mushroom, Chili",
    image: pizza,
    dish: "Pizza",
    price: "$15"
    },

    { 
    id: 9,
    title: "Carbonara",
    description: "Spaghetti, Cream, Bacon, Black Pepper",
    image: pasta,
    dish: "Pasta",
    price: "$8"
    },

    { 
    id: 10,
    title: "Tuna Tomato",
    description: "Spaghetti, Tuna, Tomato Sauce",
    image: pasta,
    dish: "Pasta",
    price: "$8"
    },

    { 
    id: 11,
    title: "Swedish Meatballs",
    description: "Pasta, Swedish Meatballs, Tomato Sauce",
    image: pasta,
    dish: "Pasta",
    price: "$10"
    },

    { 
    id: 12,
    title: "Bolognese",
    description: "Spaghetti, Meat Sauce",
    image: pasta,
    dish: "Pasta",
    price: "$10"
    },

    { 
    id: 13,
    title: "Spice Seafood",
    description: "Spaghetti, Shrimp, Garlic, Chili, Lemon Sauce",
    image: pasta,
    dish: "Pasta",
    price: "$12"
    },

    { 
    id: 14,
    title: "Kongsvinger Special",
    description: "Pasta, Cream, Outer File, Onion, Mushroom",
    image: pasta,
    dish: "Pasta",
    price: "$13"
    },

    { 
    id: 15,
    title: "Meat Lovers",
    description: "Spaghetti, Outer File, Chorizo, Ham, Garlic, Tomato",
    image: pasta,
    dish: "Pasta",
    price: "$15"
    },

    { 
    id: 16,
    title: "Lobster",
    description: "Pasta, Lobster, Garlic, Lime Sauce, Mushroom",
    image: pasta,
    dish: "Pasta",
    price: "$17"
    },

    { 
    id: 17,
    title: "Coca Cola",
    description: "Soda",
    image: soda,
    dish: "Drink",
    price: "$2"
    },

    { 
    id: 18,
    title: "Fanta",
    description: "Soda",
    image: soda,
    dish: "Drink",
    price: "$2"
    },

    { 
    id: 19,
    title: "Sprite",
    description: "Soda",
    image: soda,
    dish: "Drink",
    price: "$2"
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