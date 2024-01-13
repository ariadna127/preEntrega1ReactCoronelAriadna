import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>@ 2023 Ariadna Coronel</p>
            <div className='d-flex gap-4'>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-whatsapp"></i>
            </div>
        </footer>
    )
}

export default Footer