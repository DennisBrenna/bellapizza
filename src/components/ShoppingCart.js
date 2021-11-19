import React from 'react'

export default function ShoppingCart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.15;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice+taxPrice+shippingPrice;

    return (
        <aside>
        <h2 style={{color:'white'}}> Cart Items:</h2>
        <div>
            {cartItems.length === 0 && <div style={{color:'white'}}>Cart is empty</div>}
        </div>
        {cartItems.map((item)=>(
            <div key={item.id}>
                <div style={{color:'white'}}>{item.name}</div>
                <div>
                    <button onClick={()=>onAdd(item)}>+</button>
                    <button onClick={()=>onRemove(item)}>-</button>
                </div>
                <div style={{color:'white'}}>
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div style={{color:'white'}}>
                    <div>Items Price</div>
                    <div>${itemsPrice.toFixed(2)}</div>
                </div>
                <div style={{color:'white'}}>
                    <div>Tax</div>
                    <div>${taxPrice.toFixed(2)}</div>
                </div>
                <div style={{color:'white'}}>
                    <div>Shipping</div>
                    <div>${shippingPrice.toFixed(2)}</div>
                </div>
                <div style={{color:'white'}}>
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
        </aside>
    );
}
