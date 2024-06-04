import React from 'react';
import './Modal.css';

import { ModalProps } from '../../types';

const Modal = ({ onClose, children }:ModalProps) => {
    return (
        <div className="modal_overlay">
            <div className="modal">
                {children}
                <button className="modal_close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;