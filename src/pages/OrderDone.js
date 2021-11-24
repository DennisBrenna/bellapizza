import React from 'react';
import { Link } from 'react-router-dom';


    function OrderDone(props) {
     
        return(
            <>
    <div class="order-done-container">

            <h1>Thank you! Your order is completed.</h1>
            <h2>Your order will be delievered to you shortly. Hope to see you soon!</h2>
            
        <div class="cart-container">
            <h2>Your order:</h2>
            <p>Jason Special - 1 x $13.00</p>
            <p>Sprite - 1 x $2.00</p>
            <p>Shipping - $10.00</p>
            <p><b>Total Price = $25.00</b></p>

            <Link class="link-order-done" component={Link} variant="outlined" to="/" size="small">Back to Home page</Link>


        </div>







    </div>
    </>
        )
    }
    
    export default OrderDone;