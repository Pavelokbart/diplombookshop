// components/Favorites/Favorites.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FavoriteState, IBook } from '../../types';
import { removeFromFavorites } from '../../redux/actionCreators/favoriteActionCreators';
import './Favorites.css';
import HeartIcon from '../../Icons/HeartIcon';

const Favorites = () => {
    const dispatch = useDispatch();
    const favoriteItems = useSelector((state: { favorites: FavoriteState }) => state.favorites.items);

    const handleRemove = (isbn13: number) => {
        dispatch(removeFromFavorites(isbn13.toString()));
    };

    return (
        <div className="favorites">
            <h2>YOUR FAVORITES</h2>
            {favoriteItems.length === 0 ? (
                <p>Your favorites list is empty</p>
            ) : (
                <div className="favorite-items">
                    {favoriteItems.map((item: IBook, index: number) => (
                        <div key={index} className="favorite-item">
                            <img src={item.image} alt={item.title} />
                            <div className="item-details">
                                <h3>{item.title}</h3>
                                <p>by {item.authors}, {item.publisher} {item.year}</p>
                                
                            </div>
                            <button className='removebutton' onClick={() => handleRemove(item.isbn13)}>
                            <HeartIcon filled={true} />
                            </button>
                        
                        </div>
                        
                    ))}
                </div>
            )}
        </div>
    );
};

export { Favorites };
