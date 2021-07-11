import React from 'react';
import './Modal.css';

const Modal = (props) => (
    <div className='modalContainer'>
        <div className='modal'>
            {props.children}
        </div>
    </div>
);

export default Modal;