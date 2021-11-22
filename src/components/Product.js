import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";


function Product(props, dish) {
    const {product, onAdd} = props;

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'center',
        fontSize: "15px",
        alignItems: "flex-end",
        color: "white",
        backgroundColor: "black",
        boxShadow: "white",
      }));

    return (
        
            <Card sx={{ maxWidth: 200, height: "75%", border: 2, borderRadius: '20px', backgroundColor: 'black', borderColor: "white", color: "white", alignContent: "center", }}>
                <CardMedia style={{ height: "100px", width: "auto", marginLeft: "20%", marginBottom: "-15px", marginRight: "5px"}}>
                <image>{product.image}</image>
                <h3>{product.name}</h3>
                <div>${product.price}</div>
                <div>
                    <button onClick={()=>onAdd(product)} >Add to cart</button>
                </div>


            </CardMedia>
            </Card> 
        
    )
}
 
export default Product;