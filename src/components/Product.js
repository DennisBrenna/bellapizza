import React from 'react'
import ProductCard from '../components/ProductCard';

function Product(props) {
    const {product, onAdd} = props;

    return (
        <div>
            
            <h3 style={{color:'white'}}>{product.name}</h3>
            <div style={{color:'white'}}>${product.price}</div>
            <div>
                <button onClick={()=>onAdd(product)} >Add to cart</button>
            </div>
          
        </div>
    )
}
 
export default Product;