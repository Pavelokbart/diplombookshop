
import './SignIn.css';
import {Input} from '../Input'
import { INPUT_TYPES } from '../../types';
import { useState } from "react";

import { useDispatch } from 'react-redux';
import { signInUser } from "../../redux/actionCreators/userActionCreators";
import { Link } from "react-router-dom";

//fudwbw@mailto.plus
//123456789abcd
const SignIn =({})=>{

    const dispatch = useDispatch();

    
    const [input1Value,setInput1Value]=useState('')
    const [formState,setFormState]=useState({
       
        email:'',
        password:''
        
    })
    const handler =(key:string,value:string)=>{
        setFormState(prev=>({
            ...prev,
            [key]:value
        }))

    }
    const handleSignIp=()=>{
        
        dispatch(signInUser(formState))
        
    }
    return (
        <div className="wrapper">
            
            <div className="container">
                <div className="signform">
                    <div className="signform_back">
                        <a href="" className="back_link">Back to home</a>
                    </div>
                    <div className="signform_signin">
                        Sign In

                    </div>

                    <div className="signform_form">
                        <div className="form_input">
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
                        </div>
                            
                        <div className="form_forgot">
                            Forgot password?

                        </div>
                        <button onClick={handleSignIp} className="form_button">
                            Sign In
 
                        </button>
                        <div className="form_accout">
                                Don’t have an account? 
                                <Link className="accout_link" to="/sign-up">Sign Up</Link>
                                

                        </div>


                    </div>
                    
                </div>

            </div>
            


        </div>
        
    )

}
export {SignIn}