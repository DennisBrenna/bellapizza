import React from 'react';
import { Link } from 'react-router-dom';


    function OrderDone(props) {
     
        return(
            <>
    <div class="order-done-container">

            <h2>Thank you! Your order is completed.</h2>
            <h3>Your order will be delievered to you shortly. Hope to see you soon!</h3>
            
        <div class="cart-container">
            <h2>Your order:</h2>
            <p>Jason Special - 1 x $13.00</p>
            <p>Sprite - 1 x $2.00</p>
            <p>Shipping - $10.00</p>
            <p>Total Price = $25.00</p>

            <Link class="link-order-done" component={Link} variant="outlined" to="/" size="small">Back to Home page</Link>


        </div>







    </div>
    </>
        )
    }
    
    export default OrderDone;