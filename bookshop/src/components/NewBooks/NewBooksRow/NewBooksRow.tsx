import { useSelector, useDispatch } from 'react-redux';
import { INewBooksProps, INewBookState } from "../../../types";
import { BlockBoks } from "../BlockBoks";
import { Pagination } from '../../Pagination';
import './NewBooksRow.css';
import { setCurrentPage } from '../../../redux/actionCreators/booksActionCreators';
import { useEffect } from 'react';

const NewBooksRow = ({ books }: INewBooksProps) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: { books: INewBookState }) => state.books.currentPage);
    const itemsPerPage = useSelector((state: { books: INewBookState }) => state.books.itemsPerPage);

    useEffect(() => {
        dispatch(setCurrentPage(1));
    }, [books, dispatch]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedBooks = books.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            <div className="newbooks">NEW RELEASES BOOKS</div>
            <div className="booksrow">
                {selectedBooks.map((book, index) => (
                    <BlockBoks key={index} {...book} />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export { NewBooksRow };
