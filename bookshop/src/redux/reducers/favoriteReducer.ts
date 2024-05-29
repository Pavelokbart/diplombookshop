import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actionTypes/favoriteActionTypes";
import { IBook } from "../../types";

interface FavoriteState {
    items: IBook[];
}

const initialState: FavoriteState = {
    items: []
};

const favoriteReducer = (state = initialState, action: any): FavoriteState => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                items: state.items.filter(item => item.isbn13 !== action.payload)
            };
        default:
            return state;
    }
};

export default favoriteReducer;