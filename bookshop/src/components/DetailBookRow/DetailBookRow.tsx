import { useSelector, useDispatch } from 'react-redux';
import { INewBooksProps,INewBookState } from '../../types';
import { BlockBoks } from '../NewBooks/BlockBoks';
import { Pagination } from '../Pagination';
import './DetailBookRow.css';
import { setCurrentPage } from '../../redux/actionCreators/booksActionCreators';
import { useEffect } from 'react';

const DetailBookRow = ({ books }: INewBooksProps) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: { books: INewBookState }) => state.books.currentPage);
    const itemsPerPage = 3;  // Set the items per page to 3

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
            <div className="similarbooks">SIMILAR BOOKS</div>
            <div className="booksrows">
                {selectedBooks.map((book, index) => (
                    <BlockBoks key={index} {...book} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export { DetailBookRow };
