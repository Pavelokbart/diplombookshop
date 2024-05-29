
import './SignUp.css';
import {Input} from '../Input'
import { INPUT_TYPES } from '../../types';
import { useState } from "react";
import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom";
import { signUpUser } from '../../redux/actionCreators/userActionCreators';

const SignUp =({})=>{
    const dispatch = useDispatch();
    const [formState,setFormState]=useState({
        username:'',
        email:'',
        password:'',
        confirm:''
    })
    const handler =(key:string,value:string)=>{
        setFormState(prev=>({
            ...prev,
            [key]:value
        }))

    }
    const handleSignUp=()=>{
        const {confirm,...other}=formState
        dispatch(signUpUser(other))
        
    }
    return (
        <div className="wrapper">
            
            <div className="main">
                    <div className="container">
                        <div className="main_txtback">
                        Back to home
                        </div>
                        <div className="main_txtregis">
                        Sign Up
                        </div>
                       <div className="main_blockregistr">
                            <Input
                            className="forregist"
                            placeholder="Your name"
                            type={INPUT_TYPES.TEXT}
                            value={formState.username}
                            onChange={(e:any)=>handler('username',e.target.value)}
                            label={'Name'}/>
                            <Input
                            className="forregist"
                            placeholder="Your email"
                            type={INPUT_TYPES.TEXT}
                            value={formState.email}
                            onChange={(e:any)=>handler('email',e.target.value)}
                            label={'Email'}/>
                            <Input
                            className="forregist"
                            placeholder="Your password"
                            type={INPUT_TYPES.TEXT}
                            value={formState.password}
                            onChange={(e:any)=>handler('password',e.target.value)}
                            label={'Password'}/>
                            <Input
                            className="forregist"
                            placeholder="Confirm password"
                            type={INPUT_TYPES.TEXT}
                            value={formState.confirm}
                            onChange={(e:any)=>handler('confirm',e.target.value)}
                            label={'Confirm password'}/>

                            <button onClick={handleSignUp} className="main_button">
                            Sign Up
 
                            </button>
                            
                            <div className="main_txt">
                            Already have an account?<Link className="txt_update" to="/sign-in">Sign In</Link>
                            </div>
                            
                            
                            
                            
                            
                        </div>
                        <div className="main_bottom">
                            <div className="bottom_top">
                                <div className="bottom_left">
                                ©2022 Blogfolio

                                </div>
                                <div className="bottom_right">
                                All rights reserved

                                </div>

                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            
            


        </div>
    )

}
export {SignUp}