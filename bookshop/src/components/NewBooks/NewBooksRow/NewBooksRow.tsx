import { useSelector, useDispatch } from 'react-redux';
import { INewBooksProps, INewBookState } from "../../../types";
import { BlockBoks } from "../BlockBoks";
import { Pagination } from '../../Pagination';
import './NewBooksRow.css';
import { setCurrentPage } from '../../../redux/actionCreators/booksActionCreators';
import { useEffect } from 'react';
import { Newsletter } from '../../Newsletter/Newsletter';

const NewBooksRow = ({ books }: INewBooksProps) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: { books: INewBookState }) => state.books.currentPage);
    const itemsPerPage = 8;  

    useEffect(() => {
        dispatch(setCurrentPage(1));
    }, [books, dispatch]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedBooks = books.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(books.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            dispatch(setCurrentPage(page));
        }
    };

    return (
        <div>
            <div className="newbooks">NEW RELEASES BOOKS</div>
            <div className="booksrow">
                {selectedBooks.map((book, index) => (
                    <BlockBoks key={index} {...book} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            <Newsletter />
        </div>
    );
};

export { NewBooksRow };
