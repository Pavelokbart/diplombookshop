import './Confirm.css';
import { Input } from '../Input';
import { INPUT_TYPES } from '../../types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activateSignUp } from '../../redux/actionCreators/userActionCreators';

const Confirm = () => {
    

    const [formState, setFormState] = useState({
        uid: '',
        token: ''
    });

    const handler = (key: string, value: string) => {
        setFormState(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleCheck = () => {
        const { uid, token } = formState;
        if (uid && token) {
            window.location.href = `/activate/${uid}/${token}`;
        }
    };

    return (
        <div className="wrapper">
            <div className="main">
                <div className="container">
                    <div className="main_txtback">
                        Back to home
                    </div>
                    <div className="main_txtregis">
                        Registration Confirmation
                    </div>
                    <div className="main_blockconf">
                        <div className="txt_check">Enter the data that you received by e-mail UID and TOKEN to confirm registration</div>
                        <div className="form_input">
                            <Input
                                className="forregist"
                                placeholder="Your uid"
                                type={INPUT_TYPES.TEXT}
                                value={formState.uid}
                                onChange={(e: any) => handler('uid', e.target.value)}
                                label={'UID'}
                            />
                            <Input
                                className="forregist"
                                placeholder="Your token"
                                type={INPUT_TYPES.TEXT}
                                value={formState.token}
                                onChange={(e: any) => handler('token', e.target.value)}
                                label={'Token'}
                            />
                        </div>
                        <button className="main_button" onClick={handleCheck}>
                            Check
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export { Confirm };

