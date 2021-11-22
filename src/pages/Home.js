import * as React from "react";

import MainCard from '../components/MainCard';
import Header from '../components/Header';
import DividerHorizontal from '../components/DividerHorizontal'
import Footer from "../components/FooterCard";

function Home(props) {
    const {amountOfItems} = props;
    return(
        <>
        <Header amountOfItems={amountOfItems}/>
        <MainCard/>
        <DividerHorizontal/><br/><br/>
        <Footer/>
        </>
    )
}

export default Home;

