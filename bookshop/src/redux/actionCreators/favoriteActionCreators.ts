import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actionTypes/favoriteActionTypes";
import { IBook } from '../../types';

export const addToFavorites = (book: IBook) => ({
    type: ADD_TO_FAVORITES,
    payload: book
});

export const removeFromFavorites = (isbn13: string) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: isbn13
});