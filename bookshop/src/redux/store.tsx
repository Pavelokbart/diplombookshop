import createSagaMiddleware from 'redux-saga'
import {all} from 'redux-saga/effects'
import { createStore, applyMiddleware } from 'redux';
import { bookReducer } from './reducers/booksReducer';
import { watcherBooks } from './actionCreators/booksActionCreators';
import { combineReducers } from 'redux';
import { watcherUser } from './actionCreators/userActionCreators';
import { userReducer } from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';
import favoriteReducer from './reducers/favoriteReducer';




// const sagaMiddleware=createSagaMiddleware()

// function* rootSaga(){
//     yield all([
//         watcherBooks
         
//     ]) 

// }

// const store = createStore(
//     bookReducer
    
// );

const sagaMiddleware=createSagaMiddleware()

function* rootSaga(){
    yield all([
        watcherBooks(),
        watcherUser()
         
    ]) 

}



export const store= createStore(
    combineReducers({
        books:bookReducer,
        user:userReducer,
        cart:cartReducer,
        favorites: favoriteReducer,
        
    }),{},
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)

export default store;


