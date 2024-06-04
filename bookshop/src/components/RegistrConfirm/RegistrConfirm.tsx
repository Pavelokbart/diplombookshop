
import './RegistrConfirm.css';
import {Input} from '../Input'
import { INPUT_TYPES } from '../../types';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { activateSignUp } from "../../redux/actionCreators/userActionCreators";

const RegistrConfirm =({})=>{
    const [input1Value,setInput1Value]=useState('')
    const navigate=useNavigate()
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
                       <div className="main_blockconfirm">
                            <div className="main_txtconfirm">
                            You have confirmed your email!
    
                            </div>
                           

                            <button
                            onClick={()=>{navigate( `/books`)}} className="main_button">
                            Go to home
 
                            </button>
                            
                            
                            
                            
                            
                        </div>
                        
                        
                    </div>
                </div>
            
            


        </div>
    )

}
export {RegistrConfirm}