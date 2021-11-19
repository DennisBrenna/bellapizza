import React from "react";
import Footer from "../components/FooterCard";
import MenuCard from "../components/MenuCard";
import Header from "../components/Header";
import DividerHorizontal from "../components/DividerHorizontal";

function Menu() {

    return(
     
        <>
        <Header/>
        <MenuCard/>
        <DividerHorizontal/><br/><br/>
        <Footer/>
        </>
        
    );

}

export default Menu;