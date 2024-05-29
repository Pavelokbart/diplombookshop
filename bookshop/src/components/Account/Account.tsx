
import './Account.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IUser } from '../../types';
import { IUserState } from '../../types';


const Account=()=>{
    
   

    const user=useSelector((state:{ user: IUserState })=>state.user.user)
  
    return (
        <div className='account'>
            <div className="account_title">
                ACCOUNT
            </div>
            <div className="account_profile">
                PROFILE
            </div>
            <div className="account_info">
                <div className="info_name">
                    Name
                    <div className="block_name">
                        <div className="name_props">{user.username}</div>

                    </div>
                    
                </div>
                <div className="info_email">
                    Email
                    <div className="block_email">
                    <div className="email_props">{user.email}</div>

                    </div>
                    
                </div>
            </div>
            <button
            onClick={()=>{
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
                window.location.pathname='/sign-in'
            }}
             className="logout_button">
                        LogOut
            </button>
            

        </div>
        
       
    )
}
export {Account}