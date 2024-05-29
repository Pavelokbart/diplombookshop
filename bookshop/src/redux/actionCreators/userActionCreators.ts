import { SIGN_UP_USER } from "../actionTypes/userActionTypes";
import { ISignUp } from "../../types";
import {takeEvery,put} from 'redux-saga/effects'
import { IActivationInfo } from "../../types"
import { ACTIVATE_SIGN_UP } from "../actionTypes/userActionTypes";
import { ISignIn } from "../../types";
import { SIGN_IN_USER } from "../actionTypes/userActionTypes";
import { IToken } from "../../types";
import { SET_USER } from "../actionTypes/userActionTypes";
import { GET_USER_INFO } from "../actionTypes/userActionTypes";
import { IUser } from "../../types";


export const signUpUser =(signUpData: ISignUp)=>({
    type:SIGN_UP_USER,
    signUpData,
})


export const activateSignUp=( activateInfo:IActivationInfo)=>(
    {
      type:ACTIVATE_SIGN_UP,
      activateInfo
      
  
    }
  )
export const signInUser=(signInData:ISignIn)=>({
    type:SIGN_IN_USER,
    signInData,
  
  })

  
  export const getUserInfo=()=>({
    type:GET_USER_INFO
  })
  export const setUser=(userInfo:IUser)=>(
    {
      type:SET_USER,
      userInfo
  
    }
  )

  function* activateUser(action: any){

    const info:Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/activation/`, {
        method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
        // Тело запроса в JSON-формате
        body: JSON.stringify(action.activateInfo),
        headers: {
          // Добавляем необходимые заголовки
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
  
    if(info.status===204)
      {
        alert('Вы успшено зашли')
      }
       //code
  }


function* signUp(action: any){
   
    const info:Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/`, {
        method: 'POST', 
       
        body: JSON.stringify(action.signUpData),
        headers: {
         
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
       //code
}


function* signIn(action: any){
  
  const info:Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/create/`, {
      method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
      // Тело запроса в JSON-формате
      body: JSON.stringify(action.signInData),
      headers: {
        // Добавляем необходимые заголовки
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const respJson:IToken= yield info.json()
    localStorage.setItem("access", respJson.access);
    localStorage.setItem("refresh", respJson.refresh);
    if(info.status===200)
      {
        window.location.pathname='/books'
      }

    


     //code
}

export function *getToken(){

  const token =localStorage.getItem('access')
  const refresh=localStorage.getItem('refresh')
  const info:Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/verify/`, {
    method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
    // Тело запроса в JSON-формате
    body: JSON.stringify({token}),
    headers: {
      // Добавляем необходимые заголовки
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  if(info.status===200)
  {
    
      return token
  }
  else
  {
    const info:Response = yield fetch(`https://studapi.teachmeskills.by/auth/jwt/refresh/`, {
    method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
    // Тело запроса в JSON-формате
    body: JSON.stringify({refresh}),
    headers: {
      // Добавляем необходимые заголовки
      'Content-type': 'application/json; charset=UTF-8',
    },
    
    })
    const {access}:{access:string}=yield info.json()
    localStorage.setItem("access",access);
    
    return access

  }




}

function* getUser (action: any){
  const token:string= yield getToken()
 
  const info:Response = yield fetch(`https://studapi.teachmeskills.by/auth/users/me/`, {
      method: 'GET', // Здесь так же могут быть GET, PUT, DELETE
      // Тело запроса в JSON-формате
      
      headers: {
        // Добавляем необходимые заголовки
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${token}`
      },
      
    })
  const user:IUser =yield info.json()

  yield put(setUser(user))
  // localStorage.setItem("username", user.username);
  
  
  


}

function* watcherUser(){
    yield takeEvery(SIGN_UP_USER,signUp)
    yield takeEvery(ACTIVATE_SIGN_UP,activateUser)
    yield takeEvery(SIGN_IN_USER,signIn)
    yield takeEvery(GET_USER_INFO,getUser) 
    

}
export {watcherUser}