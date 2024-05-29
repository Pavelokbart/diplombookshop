import { INEwBook } from "../../../types"
import './BlockBoks.css';
import {Link}  from "react-router-dom"
import StarRating from 'react-simple-star-rating';
import { useState } from "react";


const BlockBoks=({image,title,price,isbn13}:INEwBook)=>{
    const [rating, setRating] = useState<number>(0); 

    // Catch Rating value
    const handleRating = (rate: number) => {
        setRating(rate);
        
    };
  
    
    return (
        
        <div className="book-block">
            <div className="book_bg">
            <img src={image} alt={title} className="book-image" />

            </div>
            <Link to ={`/books/${isbn13}`} className="book-link">
                <h2 className="book-title">{title}</h2>
            </Link>
            
            <p className="book-price">{price}</p>
            {/* <StarRating
                ratingValue={rating} 
                onClick={handleRating} 
                size={25} 
                stars={5} 
                transition 
                allowHalfIcon 
                fullIcon={<i className="fas fa-star"></i>} // Custom full icon
                emptyIcon={<i className="far fa-star"></i>} // Custom empty icon
                halfIcon={<i className="fas fa-star-half-alt"></i>} // Custom half icon
            /> */}
           
        </div>
    )
}
export {BlockBoks}