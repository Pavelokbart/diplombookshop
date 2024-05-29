import { INEwBook, INewBooksResponse } from "../../types";
import { SET_BOOKS,LOAD_BOOKS,SET_CURRENT_PAGE,SET_ITEMS_PER_PAGE,SET_SELECTED_BOOK,LOAD_SELECTOR_BOOK,SEARCH_BOOKS} from "../actionTypes/booksActionTypes";
import {takeEvery,put} from 'redux-saga/effects'
import { IBook } from "../../types";

export const setBooks = (books: INEwBook[]) => ({
    type: SET_BOOKS,
    books,
});

export const loadBooks =()=>(
    {
        type:LOAD_BOOKS
        
    }
)

export const setSelectedBook=(selectedBook:IBook)=>({
    type:SET_SELECTED_BOOK,
    selectedBook
})

export const loadSelectedBook=(isbn13:string)=>({
    type:LOAD_SELECTOR_BOOK,
    isbn13

})

export const setCurrentPage = (page: number) => ({
    type: SET_CURRENT_PAGE,
    page,
});

export const setItemsPerPage = (items: number) => ({
    type: SET_ITEMS_PER_PAGE,
    items,
});

export const searchBooks=(query:string)=>(
    {
        type:SEARCH_BOOKS,
        query

    }
)



function* fetchLoadBooks(action: any){
    let url = `https://api.itbook.store/1.0/new`;
    const info:Response = yield fetch(url);
    const data:INewBooksResponse = yield info.json();
    console.log(data)
    yield put(setBooks(data.books));
}

function* fetchSelectedBook(action:any)
{
    const info:Response = yield fetch(`https://api.itbook.store/1.0/books/${action.isbn13}`);
    const data:IBook=yield info.json()

    yield put (setSelectedBook(data))
}

function* fetchSearchBooks(action: any) {
    const query = action.query;
    const info: Response = yield fetch(`https://api.itbook.store/1.0/search/${query}`);
    const data: INewBooksResponse = yield info.json();
    yield put(setBooks(data.books));
    
}

function* watcherBooks(){
    yield takeEvery(LOAD_BOOKS,fetchLoadBooks)
    yield takeEvery(LOAD_SELECTOR_BOOK,fetchSelectedBook)
    yield takeEvery(SEARCH_BOOKS, fetchSearchBooks);
    
   

}
export {watcherBooks}