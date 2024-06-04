import './BlockBoks.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { INEwBook } from "../../../types";
import { StarsRating } from '../../StarsRating';

const BlockBoks = ({ image, title, price, isbn13 }: INEwBook) => {
    const [rating, setRating] = useState<number>(0); 

    const handleRating = (rate: number) => {
        setRating(rate);
    };

    return (
        <div className="book-block">
            <div className="book_bg">
                <img src={image} alt={title} className="book-image" />
            </div>
            <Link to={`/books/${isbn13}`} className="book-link">
                <h2 className="book-title">{title}</h2>
            </Link>
            <div className="book-authors">by Lentin Joseph, Apress 2018</div>
            <div className="priceandstars">
                <p className="book-price">{price}</p>
                <StarsRating/>

            </div>
            
        </div>
    );
}

export { BlockBoks };
