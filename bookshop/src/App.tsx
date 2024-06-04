import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import store from './redux/store';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NewBooks } from './components/NewBooks/NewBooks';
import { Cart } from './components/Cart';
import { Account } from './components/Account/Account';
import { Favorites } from './components/Favorites/Favorites';
import { BookDetail } from './components/BookDetail';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { RegistrConfirm } from './components/RegistrConfirm';
import { SearchResults } from './components/SearchResults/SearchResults';
import { useEffect } from 'react';
import { getUserInfo } from './redux/actionCreators/userActionCreators';
import './App.css'; // Import your CSS file here
import { Confirm } from './components/Confirm/Confirtm';

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('access')) {
            dispatch(getUserInfo());
        } 
    }, [dispatch, navigate]);

    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={localStorage.getItem('access') ? <NewBooks /> : <Navigate to="/sign-in" />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="account" element={<Account />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="sign-in" element={<SignIn />} />
                    <Route path="confirm" element={<Confirm />} />
                    <Route path="activate/:uid/:token" element={<RegistrConfirm />} />
                    <Route path="books">
                        <Route index element={<NewBooks />} />
                        <Route path=":isbn13" element={<BookDetail />} />
                        <Route path="search-results" element={<SearchResults />} />
                    </Route>
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
