import { IUser } from "../../types";
import { IUserState } from "../../types";
import { SET_USER } from "../actionTypes/userActionTypes";

const initialState = {
    user:{}as IUser
    
};


export const userReducer= (state:IUserState  = initialState, action: any) => {
    switch (action.type){
        case SET_USER: {
            return ({
                ...state,
                user: action.userInfo
            })
        }
        
         
       

        default: {
            return state
        }
    }
}