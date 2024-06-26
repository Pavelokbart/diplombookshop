import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './BookDetail.css';
import { IBook, INewBookState } from '../../types';
import { loadSelectedBook } from '../../redux/actionCreators/booksActionCreators';
import { addToCart } from '../../redux/actionCreators/cartActionCreators';
import { addToFavorites, removeFromFavorites } from '../../redux/actionCreators/favoriteActionCreators';
import StarRating from '../StarRating/StarRating';
import HeartIcon from '../../Icons/HeartIcon';
import { Newsletter } from '../Newsletter/Newsletter';
import { FacebookIcon } from '../../Icons/FacebookIcon';
import { TwitterIcon } from '../../Icons/TwitterIcon';
import { HorizontIcon } from '../../Icons/HorizontIcon';
import { DetailBookRow } from '../DetailBookRow/DetailBookRow';
import Modal from '../Modal/Modal'; // Добавьте компонент Modal для всплывающих окон

const BookDetail = () => {
    const dispatch = useDispatch();
    const selected = useSelector((state: { books: INewBookState }) => state.books.selectedBook);
    const favorites = useSelector((state: { favorites: { items: IBook[] } }) => state.favorites.items);
    const accessToken =localStorage.getItem('access')
    const { isbn13 = '' } = useParams();
    const [activeTab, setActiveTab] = useState('description');
    const [showModal, setShowModal] = useState(false); 
    const books = useSelector((state: { books: INewBookState }) => state.books.books);

    useEffect(() => {
        dispatch(loadSelectedBook(isbn13));
    }, [isbn13]);

    const handleAddToCart = () => {
        if (!accessToken) {
            setShowModal(true);
            return;
        }
        dispatch(addToCart(selected));
    };

    const handleToggleFavorites = () => {
        if (!accessToken) {
            setShowModal(true);
            return;
        }
        if (isFavorite) {
            dispatch(removeFromFavorites(selected.isbn13.toString()));
        } else {
            dispatch(addToFavorites(selected));
        }
    };

    const isFavorite = favorites.some(book => book.isbn13 === selected.isbn13);

    return (
        <div className='detailbook'>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <p>Please log in to add items to your cart or favorites.</p>
                </Modal>
            )}
            <div className="detailbook_title">{selected.title}</div>
            
            <div className="detailbook_blockbook">
                <div className="blockbook_leftimg">
                    <img src={selected.image} className="lbookimage" />
                    <div className="bcg_btn">
                        <button onClick={handleToggleFavorites} className='heartbutton'>
                            <HeartIcon filled={isFavorite} />
                        </button>
                    </div>
                </div>
                <div className="blockbook_right">
                    <div className="priceandstarts">
                        <div className="right_price">{selected.price}</div>
                        <StarRating rating={selected.rating} />
                    </div>
                    <div className="right_blockinf">
                        <div className="blockinf_leftcolum">
                            <div className="leftcolum_author">Author</div>
                            <div className="leftcolum_publisher">Publisher</div>
                            <div className="leftcolum_language">Language</div>
                            <div className="leftcolum_format">Format</div>
                        </div>
                        <div className="blockinf_rightcolum">
                            <div className="rightcolum_author">{selected.authors}</div>
                            <div className="rightcolum_publisher">{`${selected.publisher}, ${selected.year}`}</div>
                            <div className="rightcolum_language">English</div>
                            <div className="rightcolum_format">PaperBook</div>
                        </div>
                    </div>
                    <div className="blockinf_btnlink">
                        <button onClick={handleAddToCart} className="right_button">ADD TO CART</button>
                        <a href={selected.url} className="right_previewlink">Preview book</a>
                    </div>
                </div>
            </div>
            <div className="detailbook_description">
                <div className="blocks_descr">
                    <button className='descrbutton' onClick={() => setActiveTab('description')}>Description</button>
                    <button className='descrbutton' onClick={() => setActiveTab('authors')}>Authors</button>
                    <button className='descrbutton' onClick={() => setActiveTab('reviews')}>Reviews</button>
                </div>
                {activeTab === 'description' && (
                    <div className="desc_txt">{selected.desc}</div>
                )}
                {activeTab === 'authors' && (
                    <div className="authors_txt">{selected.authors}</div>
                )}
                {activeTab === 'reviews' && (
                    <div className="reviews_txt">Fill this section in with your proposal for the package, and send the link to this page out for discussion.

                    Keep this section up to date over the course of the email conversation until the proposal is accepted.
                    
                    When appropriate, add a parallel "API proposal" section</div>
                )}
            </div>
            <div className="links">
                <a href="" className="links_facebook"><FacebookIcon/></a>
                <a href="" className="links_twitter"><TwitterIcon/></a>
                <a href="" className="links_twitter"><HorizontIcon/></a>
            </div>

            <Newsletter/>
            <DetailBookRow books={books}/>

        </div>
    );
};

export { BookDetail };
