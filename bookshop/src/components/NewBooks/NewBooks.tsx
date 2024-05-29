import { INEwBook, INewBooksProps } from "../../types"
import { BlockBoks } from "./BlockBoks"
import { useSelector } from 'react-redux';
import { NewBooksRow } from "./NewBooksRow/NewBooksRow";

import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setBooks } from "../../redux/actionCreators/booksActionCreators";
import { loadBooks } from "../../redux/actionCreators/booksActionCreators";
import { INewBookState } from "../../types";


const NewBooks=()=>{

    const dispatch = useDispatch();

    const books = useSelector((state: { books: INewBookState }) => state.books.books);
    
    useEffect(() => {
        dispatch(loadBooks());
    }, []);

    
    return (

        <div>
        <NewBooksRow books={books} />
        </div>
       
    )
}
export {NewBooks}