import React from 'react';
import { INEwBook } from './types';
import { NewBooks } from './components/NewBooks/NewBooks';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Header } from './components/Header';
import { Pagination } from './components/Pagination';
import { BookDetail } from './components/BookDetail';
import { IBook } from './types';
import { SearchResults } from './components/SearchResults/SearchResults';
import { SignUp } from './components/SignUp';
import { RegistrConfirm } from './components/RegistrConfirm';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserInfo } from './redux/actionCreators/userActionCreators';
import { Navigate } from 'react-router-dom';
import { SignIn } from './components/SignIn';
import { Cart } from './components/Cart';
import { Account } from './components/Account/Account';
import { Favorites } from './components/Favorites/Favorites';

import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom"

  const book: IBook = {
    error: "0",
    title: "Robot Operating System (ROS) for Absolute Beginners, 2nd Edition",
    subtitle: "Robotic Programming Made Easy",
    authors: "Lentin Joseph, Aleena Johny",
    publisher: "Apress",
    isbn10: 1484277715,
    isbn13: 9781484277710,
    pages: "320",
    year: "2022",
    rating: "4.5",
    desc: "Start programming your own robots using Robot Operating System (ROS). Targeted for absolute beginners in ROS, Linux, and Python, this guide lets you build your own robotics projects.",
    price: "$41.57",
    image: "https://itbook.store/img/books/9781484277710.png",
    url: "https://itbook.store/books/9781484277710",
    pdf: {
        "Chapter 1": "https://itbook.store/files/9781484277710/chapter1.pdf",
        "Chapter 2": "https://itbook.store/files/9781484277710/chapter2.pdf"
    }
};




function App() {

    const dispatch = useDispatch();
    const navigate=useNavigate()
 
  

    useEffect(()=>{
      console.log(localStorage.getItem("access"))
      if(localStorage.getItem("access"))
        {

          dispatch(getUserInfo())

        }
        else{
          navigate('/sign-in')
        }
      
  
    }, [])

    return(
        <>
        <Header />
            <Routes>
                <Route path='/'>
                    <Route index element={localStorage.getItem('access') ? <NewBooks /> : <Navigate to={'/sign-in'}/>} />
                    <Route path="cart" element={<Cart/>} />
                    <Route path="favorites" element={<Favorites/>} />
                    <Route path="account" element={<Account/>} />
                    <Route path="sign-up" element={<SignUp/>} />
                    <Route path="sign-in" element={<SignIn/>} />
                    <Route path="activate/:uid/:token" element={<RegistrConfirm/>}/>
                    <Route  path="books">
                      
                        <Route index element={<NewBooks/>}></Route>
                        <Route path=':isbn13' element={<BookDetail />} />
                        <Route path="search-results" element={<SearchResults/>} />
                        

                    </Route>
                    
                    
                    
                        

                    

                </Route>

            </Routes>
            </>

    )

  return (
      <Provider store={store}>
          <div>
                <Header></Header>
              
              <NewBooks />
              

          </div>
      </Provider>
  );
}

export default App;
