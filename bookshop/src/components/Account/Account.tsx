
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
    const navigate = useNavigate();
    console.log(user.email)
   
    const token = localStorage.getItem('access');

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        navigate('/sign-in');
    };
  
    return (
        <div className='account'>
            {token ? (
                <>
                    <div className="account_title">ACCOUNT</div>
                    <div className="account_profile">PROFILE</div>
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
                    <button onClick={handleLogout} className="logout_button">
                        LogOut
                    </button>
                </>
            ) : (
                <div className="not-logged-in">
                    <p>You are not logged in. Please log in to access your account.</p>
                    <button onClick={() => navigate('/sign-in')} className="login_button">
                        Go to Login
                    </button>
                </div>
            )}
        </div>
    );
}
export {Account}