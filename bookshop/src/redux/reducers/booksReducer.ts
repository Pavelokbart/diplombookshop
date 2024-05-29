import { IBook, INEwBook } from "../../types";
import { INewBookState } from "../../types";
import { SET_BOOKS,LOAD_BOOKS,SET_CURRENT_PAGE,SET_ITEMS_PER_PAGE,SET_SELECTED_BOOK, } from "../actionTypes/booksActionTypes";

interface IBooksState {
    books: INEwBook[];
    currentPage: number;
    itemsPerPage: number;
    selectedBook:IBook
}

const initialState: INewBookState = {
    books: [],
    currentPage: 1,
    itemsPerPage: 8,
    selectedBook:
    {
        error: "",
        title: "",
        subtitle: "",
        authors: "",
        publisher: "",
        isbn10: 0,
        isbn13: 0,
        pages: "",
        year: "",
        rating: "",
        desc: "",
        price: "",
        image: "",
        url: "",
        pdf: {}

    }
    
    
};

export const bookReducer= (state = initialState, action: any) => {
    switch (action.type) {
        case SET_BOOKS: {
            return {
                ...state,
                books: action.books,
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page,
            };
        }
        case SET_ITEMS_PER_PAGE: {
            return {
                ...state,
                itemsPerPage: action.items,
            };
        }
        case SET_SELECTED_BOOK:{
            return{
                ...state,
                selectedBook:action.selectedBook
            }
        }
        
        default: {
            return state;
        }
    }
};
