import React from 'react'
import Card from '@mui/material/Card';


function Product(props) {
    const {product, onAdd} = props;

    return (
        
            <Card>
            
            <h3 style={{color:'white'}}>{product.name}</h3>
            <div style={{color:'white'}}>${product.price}</div>
            <div>
                <button onClick={()=>onAdd(product)} >Add to cart</button>
            </div>
            </Card>
        
    )
}
 
export default Product;