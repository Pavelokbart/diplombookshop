import { ArrowLeft } from '../Icons/ArrowLeft';
import { ArrowRight } from '../Icons/ArrowRight';
import './Pagination.css';
import { setCurrentPage } from '../../redux/actionCreators/booksActionCreators';
import { INewBookState } from '../../types';
import { useSelector,useDispatch } from 'react-redux';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: { books: INewBookState }) => state.books.currentPage);
    const itemsPerPage = useSelector((state: { books: INewBookState }) => state.books.itemsPerPage);
    const totalBooks = useSelector((state: { books: INewBookState }) => state.books.books.length);
    const totalPages = Math.ceil(totalBooks / itemsPerPage);

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <div className="prevnext">
            <div className="prevnext_prev prev">
                <button
                    className="prev_button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ArrowLeft />
                </button>
                <div className="prev_txtprev">
                    <div className="txtprev_firstcolum">Prev</div>
                </div>
            </div>
            <div className="prevnext_next next">
                <div className="next_txtnext">
                    <div className="txtnext_firstcolum">Next</div>
                </div>
                <button
                    className="next_button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export { Pagination };