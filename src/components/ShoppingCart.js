import React from 'react'

export default function ShoppingCart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.15;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice+taxPrice+shippingPrice;

    return (
        <div>
        <div>
            {cartItems.length === 0 && <div style={{color:'white'}}>Cart is empty</div>}
        </div>
        {cartItems.map((item)=>(
            <div key={item.id}>
                <div className="shoppingCartName" >{item.name}</div>
                <div className="shoppingCartButton">
                    <button onClick={()=>onAdd(item)}>+</button>
                    <button onClick={()=>onRemove(item)}>-</button>
                </div>
                <div className="shoppingCartPrice">
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className="shoppingCartPrice">
                    <div>Items Price</div>
                    <div>${itemsPrice.toFixed(2)}</div>
                </div>
                <div className="shoppingCartPrice">
                    <div>Tax</div>
                    <div>${taxPrice.toFixed(2)}</div>
                </div>
                <div className="shoppingCartPrice">
                    <div>Shipping</div>
                    <div>${shippingPrice.toFixed(2)}</div>
                </div>
                <div className="shoppingCartPrice">
                    <div>Total Price</div>
                    <div>${totalPrice.toFixed(2)}</div>
                </div>
                <hr/>
                <div>
                    <button onClick={()=>alert('Implement Checkout')}>
                        Checkout
                    </button>
                </div>
                </>
            )}
        </div>
    );
}
