
import './RegistrConfirm.css';
import {Input} from '../Input'
import { INPUT_TYPES } from '../../types';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { activateSignUp } from "../../redux/actionCreators/userActionCreators";

const RegistrConfirm =({})=>{
    const [input1Value,setInput1Value]=useState('')

    const { uid='',token=''}=useParams()
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(activateSignUp({uid,token}))
 
 }, [dispatch])
    
    return (
        <div className="wrapper">
           
            <div className="main">
                    <div className="container">
                        <div className="main_txtback">
                        Back to home
                        </div>
                        <div className="main_txtregis">
                        Registration Confirmmation
                        </div>
                       <div className="main_blockregistr">
                            <div className="main_txtconfirm">
                                Please activite your account with the activation <br />
                                Link <br />
                                Please check your email
    
                            </div>
                           

                            <button className="main_button">
                            Go to home
 
                            </button>
                            
                            
                            
                            
                            
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
export {RegistrConfirm}