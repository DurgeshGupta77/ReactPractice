import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 3000);
    });

    return <React.Fragment>
        <div style={{ backgroundColor: 'whitesmoke', width: '40%', height: '100px', marginLeft: '30%', padding: '30px' }}>
            <p style={{ textAlign: 'center' }}>{modalContent}</p>
        </div>
    </React.Fragment>
}

export default Modal;