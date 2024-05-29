
import { useSelector } from "react-redux"
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { searchBooks } from "../../redux/actionCreators/booksActionCreators";
import { BlockBoks } from "../NewBooks/BlockBoks";
import { INEwBook } from "../../types";
import './SearchResults.css';

const SearchResults =()=>{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search') || '';

    const dispatch = useDispatch();
    const searchResults = useSelector((state: any) => state.books.books);

    useEffect(() => {
        if (searchQuery) {
            dispatch(searchBooks(searchQuery));
        }
    }, [searchQuery, dispatch]);



    
    
    return (

        <div className="search-results">
            <div className="results_txt">{`"${searchQuery.toUpperCase()}"`} SEARCH RESULTS</div>
            <div className="results_item">
                {searchResults.map((book: INEwBook) => (
                    <BlockBoks key={book.isbn13} {...book} />
                ))}

            </div>
            
        </div>
    )

}
export {SearchResults}