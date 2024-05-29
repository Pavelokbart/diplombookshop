// components/Cart/Cart.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartState, CartItem } from '../../types';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/actionCreators/cartActionCreators';
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: { cart: CartState }) => state.cart.items);
    const totalPrice = useSelector((state: { cart: CartState }) => state.cart.totalPrice);

    const handleRemove = (isbn13: number) => {
        dispatch(removeFromCart(isbn13.toString()));
    };

    const handleIncrement = (isbn13: number) => {
        dispatch(incrementQuantity(isbn13.toString()));
    };

    const handleDecrement = (isbn13: number) => {
        dispatch(decrementQuantity(isbn13.toString()));
    };

    return (
        <div className="cart">
            <h2>YOUR CART</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item: CartItem, index: number) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.title} />
                                <div className="item-details">
                                    <h3>{item.title}</h3>
                                    <p>by {item.authors}, {item.publisher} {item.year}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => handleDecrement(item.isbn13)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleIncrement(item.isbn13)}>+</button>
                                    </div>
                                    <p>${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}</p>
                                    
                                </div>
                                <button className='removebutton' onClick={() => handleRemove(item.isbn13)}>x</button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <div className="summary-item">
                            <span>Sum total:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="summary-item">
                            <span>VAT:</span>
                            <span>${(totalPrice * 0.18).toFixed(2)}</span>
                        </div>
                        <div className="summary-item total">
                            <span>TOTAL:</span>
                            <span>${(totalPrice * 1.18).toFixed(2)}</span>
                        </div>
                        <button className="checkout-button">CHECK OUT</button>
                    </div>
                </>
            )}
        </div>
    );
};

export { Cart };
