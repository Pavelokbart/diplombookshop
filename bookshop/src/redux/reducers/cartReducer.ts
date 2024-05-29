import { CartState } from "../../types";
import { IBook } from "../../types";
import { ADD_TO_CART } from "../actionTypes/cartActionTypes";
import { REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../actionTypes/cartActionTypes";

const initialState: CartState = {
    items: [],
    totalPrice: 0
};



const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.isbn13 === newItem.isbn13);
            let updatedItems;
            if (existingItem) {
                updatedItems = state.items.map(item =>
                    item.isbn13 === newItem.isbn13
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedItems = [...state.items, { ...newItem, quantity: 1 }];
            }
            const updatedTotalPriceAdd = updatedItems.reduce((total, item) => total + item.quantity * parseFloat(item.price.slice(1)), 0);
            return {
                ...state,
                items: updatedItems,
                totalPrice: updatedTotalPriceAdd
            };
        case REMOVE_FROM_CART:
            const filteredItems = state.items.filter(item => item.isbn13 !== action.payload);
            const updatedTotalPriceRemove = filteredItems.reduce((total, item) => total + item.quantity * parseFloat(item.price.slice(1)), 0);
            return {
                ...state,
                items: filteredItems,
                totalPrice: updatedTotalPriceRemove
            };
        case INCREMENT_QUANTITY:
            const incrementedItems = state.items.map(item =>
                item.isbn13 === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            const updatedTotalPriceIncrement = incrementedItems.reduce((total, item) => total + item.quantity * parseFloat(item.price.slice(1)), 0);
            return {
                ...state,
                items: incrementedItems,
                totalPrice: updatedTotalPriceIncrement
            };
        case DECREMENT_QUANTITY:
            const decrementedItems = state.items.map(item =>
                item.isbn13 === action.payload && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            const updatedTotalPriceDecrement = decrementedItems.reduce((total, item) => total + item.quantity * parseFloat(item.price.slice(1)), 0);
            return {
                ...state,
                items: decrementedItems,
                totalPrice: updatedTotalPriceDecrement
            };
        default:
            return state;
    }
};

export default cartReducer;