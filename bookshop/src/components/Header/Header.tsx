
import './Header.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Header=()=>{
    
    const [input1Value, setInput1Value] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const navigate=useNavigate()
    const handleButtonClick = () => {
        
        if (inputRef && inputRef.current) {
            
            inputRef.current.focus();
        }
        navigate( `/books/search-results?search=${input1Value}`)


    };
    return (
        
        <header className="header">
            <Link to="/books" className="header__logo">BOOKSTORE</Link>
            <div className="header__search">
                <input type="text" placeholder="Search"
                ref={inputRef}
                value={input1Value}
                onChange={(e) => setInput1Value(e.target.value)}

                 />
                <button
                onClick={handleButtonClick}
                    type="button">
                    
                    <i className="fas fa-search"></i>
                </button>
            </div>
            <div className="header__icons">
                
                <Link to="/favorites" className="header__favorites-link"><i className="fas fa-heart"></i></Link>
                <Link to="/cart" className="header__cart-link"><i className="fa fa-shopping-cart"></i></Link>
                <Link to="/account" className="header__user-link"><i className="fas fa-user"></i></Link>
                
            </div>
        </header>
    )
}
export {Header}