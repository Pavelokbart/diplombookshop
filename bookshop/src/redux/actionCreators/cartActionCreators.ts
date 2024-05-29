import { ADD_TO_CART,REMOVE_FROM_CART } from "../actionTypes/cartActionTypes";
import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../actionTypes/cartActionTypes";

import { IBook } from '../../types';

export const addToCart = (book: IBook) => ({
    type: ADD_TO_CART,
    payload: book
});

export const removeFromCart = (isbn13: string) => ({
    type: REMOVE_FROM_CART,
    payload: isbn13
});

export const incrementQuantity = (isbn13: string) => ({
    type: INCREMENT_QUANTITY,
    payload: isbn13
});

export const decrementQuantity = (isbn13: string) => ({
    type: DECREMENT_QUANTITY,
    payload: isbn13
});